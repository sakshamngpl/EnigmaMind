import Image from "next/image"

const InsuranceCard = (props: {
  imageURL: string,
  title?: string,
  description?: string,
}) => {
  return (
    <div className="flex flex-col gap-4 max-w-md text-white">
      <div className="flex">
        <Image
          className="w-12 mx-auto"
          src={props.imageURL}
          alt={props.title + ' image '}
          width={100} height={100} />
      </div>
      <div className="">
        <h1 className="text-center font-medium text-lg">{props.title}</h1>
      </div>
      <div>
        <p className="text-center px-4 max-w-72">{props.description}</p>
      </div>
    </div>
  )
}

export default InsuranceCard;