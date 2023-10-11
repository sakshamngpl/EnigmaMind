

type Props = {
  heading?: string,
  children: React.ReactNode,
};

const BlueSection = (props: Props) => {
  return (
    <section className=" bg-tertiary py-16">
      <div className="2xl:container mx-auto px-4">
        <h1 className="text-white text-4xl mb-12 text-center mx-auto font-medium">{props.heading}</h1>
        {props.children}
      </div>
    </section>
  )
}

export default BlueSection;