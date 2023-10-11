const fs = require('fs')
const path = require('path')

const getDataType = (data) => {
  if (Array.isArray(data)) return 'array'
  return typeof data
}

const camelCaseToTitle = str => {
  const result = str
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, ' ')
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult
}

const getSchemaFromDataChunk = (name, data) => {
  const dataType = getDataType(data)
  let result = {}
  if (name) {
    result = {
      name,
      title: camelCaseToTitle(name),
    }
  }

  if (dataType === 'object') result = {
    ...result,
    type: 'object',
    fields: Object.keys(data).map(key => {
      return getSchemaFromDataChunk(key, data[key])
    })
  }

  // considering all array elements have the same structure
  else if (dataType === 'array') result = {
    ...result,
    type: 'array',
    of: data.slice(0, 1).map(item => {
      return getSchemaFromDataChunk(null, item)
    })
  }

  else result = {
    ...result,
    type: dataType
  }

  return result
}


// console.dir(getSchemaFromDataChunk('section_2', data['section_2']), { depth: null })

function serializeObject(obj) {
  return JSON.stringify(obj, null, 2)
    .replace(/\\"/g, '"')
    .replace(/"defineField/g, "defineField")
    .replace(/\)"/g, ")")
    .replace(/\\n/g, '\n')
}


const generateSchema = (docName, inputFilePath, outputFilePath) => {
  const data = require(inputFilePath)
  const result = {
    name: docName,
    title: camelCaseToTitle(docName),
    type: 'document',
    fields: []
  }
  Object.keys(data).forEach((key) => {
    const partialSchema = getSchemaFromDataChunk(key, data[key])
    result.fields.push(`defineField(${serializeObject(partialSchema)})`)
    fs.writeFileSync(outputFilePath, `import { defineField, defineType } from 'sanity'\n\nexport default defineType(${serializeObject(result)})`)
  })
}

generateSchema(
  'navbar',
  path.join(__dirname, 'data.json'),
  path.join('./sanity/schemas', 'navbar.ts')
)