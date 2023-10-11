import Image from "next/image"

interface IndustryCardInterface {
  imageURL: string,
  heading: string,
};

const IndustryDropdownCard = (props: IndustryCardInterface) => {
  return (
    <div className="flex gap-8 items-center px-10 py-4 transition-all hover:bg-blue-50 justify-start">
      <Image className="w-10 h-10" src={props.imageURL} alt={props.heading} width={50} height={50} />
      <h2>{props.heading}</h2>
    </div>
  )
}

export default IndustryDropdownCard;