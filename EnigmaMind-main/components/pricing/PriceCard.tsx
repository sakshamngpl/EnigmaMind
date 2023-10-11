import Pricing from "@/constants/Pricing";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import GeneralButton from "../GeneralButton";
import Link from "next/link";


function getPrice(price: number, pricing: boolean, currency: string, discountPercentage: number) {

  // get the price in currency
  price = Pricing.currencyList[currency as keyof typeof Pricing.currencyList];

  // if discount then apply it
  if (pricing) {
    price = price * (discountPercentage / 100.00);
  }
  return price.toFixed(2);
}

const PriceCard = () => {

  // true : yearly
  // false : monthly
  const [pricing, setPricing] = useState(true);
  const [currency, setCurrency] = useState('Rp');

  let price = getPrice(Pricing.SGDMonthlyPrice, pricing, currency, Pricing.section_2.discountPercentage);

  // styling
  const selectorClass = (pricing) ? 'ml-auto' : 'mr-auto';
  const fader = (!pricing) ? 'opacity-50' : '';
  const faderx = (pricing) ? 'opacity-50' : '';

  function handleCurrencyChange(event: ChangeEvent<HTMLSelectElement>) {
    setCurrency(event.target.value);
  }

  return (

    <>
      <div className="flex flex-col justify-center items-center">

        {/* selectors */}
        <div className="flex flex-col lg:flex-row lg:gap-20 items-center justify-center">
          {/* pricing toggler  */}
          <div className="flex items-center mb-6 lg:mb-16">
            <div className={`px-2 text-sm mr-2 ${faderx}`}>
              Monthly
            </div>

            <div className="w-14 p-1 rounded-full bg-tertiary flex mr-4"
              onClick={() => setPricing(((pricing) => !pricing))}
            >
              <div className={`transition-all w-7 h-7 bg-white rounded-full ${selectorClass}`}>

              </div>
            </div>

            <div className={`px-2 text-sm ${fader}`}>
              Yearly
            </div>

            <div className={`text-xs px-4 py-3 bg-blue-200 rounded ${fader}`}>
              {`${Pricing.section_2.discountPercentage}% discount`}
            </div>
          </div>

          {/* currency selector */}
          <div className="flex gap-4 items-center mb-10 text-sm lg:mb-16">
            <div>Currency</div>

            <select id="to_currency"
              className="p-2 min-w-[16rem]"
              defaultValue={'Rp'}
              onChange={(ev) => handleCurrencyChange(ev)}
            >
              <option
                value="ARS">Argentina (ARS)</option>
              <option
                value="AUD">Australia Dollar (AUD)</option>
              <option
                value="BGN">Bulgaria (BGN)</option>
              <option
                value="BRL">BRL (Brazil)</option>
              <option
                value="Rp"> Indonesian Rupiah (Rp)</option>
              <option
                value="SGD"> Singapore (SGD)</option>
            </select>
          </div>

        </div>


        <div className="flex flex-col gap-12 lg:flex-row">

          {/* card-1 */}
          <div className="max-w-sm mx-auto sm:max-w-md border rounded p-5 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div className="relative text-2xl font-medium text-slate-700">
                Standard
                <div className="absolute h-[3px] mt-1 w-10 bg-slate-700"></div>
              </div>

              <div className="flex flex-col items-end">
                <div className="text-slate-800">{`${price} ${currency}`}</div>
                <div className="text-[0.7rem] text-slate-600">3 agents per month</div>
              </div>
            </div>

            <div className="text-sm text-slate-700 max-w-[80%] mb-8">{Pricing.section_2.subheading}</div>

            <div>
              <h1 className="text-slate-700 font-medium mb-6">{Pricing.section_2.plan_1.title}</h1>
              <div className="flex flex-col gap-3 mb-6">
                {Pricing.section_2.plan_1.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Image
                      src={feature.imageURL}
                      alt="plan icon"
                      className="w-14 pr-8"
                      width={50}
                      height={50}
                    />
                    <div className="text-slate-600 text-sm mr-14">{feature.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className=" mt-auto">
              <Link href={Pricing.section_2.plan_1.button.url}>
                <GeneralButton>{Pricing.section_2.plan_1.button.text}</GeneralButton>
              </Link>
            </div>
          </div>


          {/* card-2 */}
          <div className="max-w-sm mx-auto sm:max-w-md border bg-blue-50 rounded p-5">
            <div className="flex justify-between items-center mb-8">
              <div className="relative text-2xl font-medium text-slate-700">
                Enterprise
                <div className="absolute h-[3px] mt-1 w-10 bg-slate-700"></div>
              </div>

              <div className="flex flex-col items-end">
                <div className="text-slate-800">
                  Customised
                </div>
                <div className="text-[0.7rem] text-slate-600">
                  Contact for more info
                </div>
              </div>
            </div>

            <div className="text-sm text-slate-700 max-w-[80%] mb-8">
              {Pricing.section_2.plan_2.subheading}
            </div>

            <div>
              <h1 className="text-slate-700 font-medium mb-6">{Pricing.section_2.plan_2.title}</h1>
              <div className="flex flex-col gap-3 mb-6">
                {Pricing.section_2.plan_2.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Image
                      src={feature.imageURL}
                      alt="plan icon"
                      className="w-14 pr-8"
                      width={50}
                      height={50}
                    />
                    <div className="text-slate-600 text-sm mr-14">{feature.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-auto">
              <Link href={Pricing.section_2.plan_2.button.url}>
                <GeneralButton>{Pricing.section_2.plan_2.button.text}</GeneralButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default PriceCard;