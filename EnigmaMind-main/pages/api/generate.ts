import { NextApiRequest, NextApiResponse } from "next"
import { Configuration, OpenAIApi } from "openai"
import { supabase } from '../../lib/supabase'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config)

const generate = async function (req: NextApiRequest, res: NextApiResponse) {
  if (!config.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured.",
      }
    })
    return
  }

  const prompt = req.body.prompt || ''
  if (prompt.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid prompt.",
      }
    })
    return
  }

  try {
    // const completion = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   temperature: 0.6,
    //   prompt,
    // })
    // const result = completion.data.choices[0].text

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      // messages: [{ "role": "system", "content": "You are a helpful assistant." }, { role: "user", content: "Hello world" }],
      messages: [{ role: "user", content: prompt }],
    })
    const result = completion.data.choices[0].message?.content


    // store values in supabase
    const { data, error } = await supabase.from('knowledge-base').insert([{ question: prompt, answer: result }])
    if (error) console.error(error)


    res.status(200).json({ result })

  } catch (error: any) {
    console.error(error)
    if (error.response) {
      res.status(error.response.status).json(error.response.data)
    } else {
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      })
    }
  }
}

export default generate