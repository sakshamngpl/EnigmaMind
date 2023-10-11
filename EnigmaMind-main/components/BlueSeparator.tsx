
const BlueSeparator = (props: { children: React.ReactNode }) => {
  return (
    <section className="bg-tertiary">
      <div className="py-4 text-xl max-w-2xl mx-auto text-center  text-white font-medium">
        {(props.children)}
      </div>
    </section>
  )
}

export default BlueSeparator