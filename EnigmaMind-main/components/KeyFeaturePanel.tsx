import Image from "next/image";

import { PanelInterface } from "@/interfaces/PanelInterface";

const KeyFeaturePanel = (props: PanelInterface) => {

  const ordering = (props.pos_left) ? ['lg:order-first', 'lg:order-last'] : ['lg:order-last', 'lg:order-first'];

  const extraLarge = {
    panelWidth: '',
    textSize: {
      sm: 'text-sm',
      mid: '',
    },
    divWidth: '',
  };

  extraLarge.panelWidth = (props.extraLarge) ? 'lg:max-w-6xl' : 'lg:max-w-4xl';
  extraLarge.divWidth = (props.extraLarge) ? 'max-w-lg' : 'max-w-md';
  extraLarge.textSize.sm = (props.extraLarge) ? 'text-md' : 'text-sm';
  extraLarge.textSize.mid = (props.extraLarge) ? 'text-md' : 'text-base';

  return (
    <div className={`max-w-sm mx-auto sm:max-w-md flex flex-col lg:flex-row ${extraLarge.panelWidth} lg:gap-20 px-2`}>
      <div className={`${ordering[0]}`}>
        <Image className="w-full" src={props.imageURL} alt={props.heading || ''} width={500} height={500} />
      </div>
      <div className={`flex flex-col justify-center gap-4 my-10 ${extraLarge.textSize.sm} text-sub-text-color ${extraLarge.divWidth} ${ordering[1]}`}>
        <h1 className={`font-medium ${extraLarge.textSize.mid}`}>{props.title}</h1>
        <h1 className={`font-semibold ${extraLarge.textSize.mid}`}>{props.heading}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

const dummyProps = {
  imageURL: '/home/panels/panel-img-1.png',
  title: 'UNIFIED VOICE & CHAT CHANNELS',
  heading: 'A truly connected customer experience.',
  description: 'Orchestrate the best customer experience across all channels on one platform. With this customer engagement platform, you get to choose the right communication channels that best fit your business needs and respond to those enquiries from a single interface.',
};

export default KeyFeaturePanel;