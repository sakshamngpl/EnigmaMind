import Image from "next/image";
import Whatsapp from "@/constants/Whatsapp";
import { useState } from "react";

const PhoneDisplay = () => {

  // this is which of the image is selected
  const [way, setWay] = useState(0);
  const phoneURL = Whatsapp.section_6.icons[way].photo;

  return (
    <section className="bg-tertiary pt-16">
        <div className="max-w-[1280px] mx-auto px-4 relative flex flex-col lg:flex-row">

          <div className="max-w-xl text-white lg:pl-16 mx-auto lg:mx-0">
            <h1 className="text-2xl sm:text-3xl lg:text-left lg:mr-auto text-center mx-auto mb-6">{Whatsapp.section_6.heading}</h1>
            <h3 className="text-center lg:text-left lg:mr-auto sm:text-lg">{Whatsapp.section_6.subheading}</h3>

            <div className="hidden mx-4 lg:grid grid-cols-3 gap-y-3 mt-14">
            {Whatsapp.section_6.icons.map((icon, index) => {

              let buttonClass = 'opacity-50';
              if (way == index) {
                buttonClass = 'opacity-100';
              }
              
              return (
                <div
                  onClick={() => setWay(index)}
                  className={`flex gap-3 items-center ${buttonClass} hover:opacity-100 cursor-pointer`}
                  key={index}>
                  <Image
                    
                    className="w-12"
                    src={icon.url}
                    width={50} height={50}
                    alt={icon.name} />
                  <span className="text-sm">{icon.name}</span>
                </div>
              );
            })}

            </div>
          </div>

          <Image
            className="relative bottom-0 mx-auto lg:w-96 lg:mx-0 lg:ml-auto lg:mr-[7%] lg:-mt-8"
            src={phoneURL}
            alt="phone"
            width={500} height={1000} />
        </div>
      </section>
  )
}

export default PhoneDisplay;