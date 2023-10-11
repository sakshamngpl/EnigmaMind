
import { DropDownCardInterface } from "@/constants/Home";
import Image from "next/image";

const DropDownCard = (props: DropDownCardInterface) => {
  return (
    <div className=" w-64 text-gray-800 bg-white hover:bg-blue-50 h-full transition-all p-4 ">
      <div className="flex flex-col gap-4 hover:translate-x-4 transition-all">
        <Image src={props.imageURL} alt={props.heading} width={40} height={40}/>
        <h1 className="text-base">{props.heading}</h1>
        <div className="text-sm mt-3">
          {props.description}
        </div>
      </div>
    </div>
  )
}

export default DropDownCard;