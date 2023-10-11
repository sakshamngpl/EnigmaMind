import Image from "next/image";
import { PartnerCardType } from "@/interfaces/PartnerCard";

const PartnerExperienceCard = (props: PartnerCardType) => {
  return (

    <div className="text-slate-600 px-0 sm:px-4 block xl:inline-block pb-6 w-[20rem] mx-auto">
      <Image alt={'dedicated-support'} height={45} width={45} src={props.image} className="h-12" />

      <h2 className="font-semibold text-lg mt-4 ">{props.heading}</h2>
      <p className="mt-6 ">{props.description}</p>
    </div>
  )
}

export default PartnerExperienceCard;