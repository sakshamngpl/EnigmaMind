import { useState } from "react";
import Image from "next/image";

type Props = {
  question?: string,
  answer?: string[],
};

const Question = (props: Props) => {

  const [showAns, setShowAns] = useState(false);

  const downIcon = (() => {
    return (
      <Image
        src={'/whatsapp/icon-chevron-down.svg'}
        alt={'⬇'}
        width={50} height={50}
      />);
  })();

  const upIcon = (() => {
    return (
      <Image
        className=" rotate-180"
        src={'/whatsapp/icon-chevron-up.svg'}
        alt={'⬆'}
        width={50} height={50}
      />);
  })();

  return (
    <>
      <div className=" border-b border-b-gray-100 flex flex-col mb-10">
        <div className="flex mb-4">
          <h1 className="text-white font-medium text-base sm:text-xl">{props.question}</h1>
          <div className="w-6 h-6 ml-auto flex items-center"
            onClick={() => setShowAns(((showAns) => !showAns))}
          >
            {showAns ? upIcon : downIcon}
          </div>
        </div>

        {showAns && <div className="max-w-md sm:max-w-xl">
          {props.answer?.map((answer, index) => (
            <div key={index} className="my-2">
              <p className="text-sm sm:text-base">{answer}</p>
            </div>
          ))}
        </div>}

      </div>
    </>
  )
}

export default Question