import Image from "next/image";
import { PartnerCardType } from "@/interfaces/PartnerCard";

const BenefitCard = (props: PartnerCardType) => {
  return (


      <div className="p-2 sm:px-4 block xl:inline-block pb-6 max-w-[25rem] mx-auto">
        <Image alt={'dedicated-support'} height={45} width={45} src={props.image} className="h-12" />

        <h2 className="font-semibold text-sm mt-10 text-sub-text-color ">{props.heading}</h2>
        <p className="mt-6 text-black text-sm">{props.description}</p>
    </div>
  )
}

export default BenefitCard;