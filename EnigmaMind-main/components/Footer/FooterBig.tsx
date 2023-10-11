import Home from "@/constants/Home"
import Link from "next/link";
import Image from "next/image";

// import Footer from "@/constants/FooterBig";


import { useContext } from 'react'
import { AppContext } from 'context/appContext'
import { FooterBig } from 'sanity/schema'
import { urlFor } from 'lib/client'

const FooterBig = () => {
  const { data } = useContext(AppContext)
  let Footer: FooterBig | undefined
  if (data) {
    data?.forEach(doc => {
      if (doc?._type === 'footerBig') {
        Footer = doc
      }
    })
  }

  // const { socials, copyrightText, links } = Footer?.footerBottom;

  return (
    <>
      <section id="contactus" className="my-12 pt-10 bg-white">
        <div className="2xl:container mx-auto xl:flex xl:flex-row px-6">

          {/* heading + subheading */}
          <div className="max-w-sm sm:max-w-lg xl:mt-6 lg:max-w-xl mx-auto xl:flex xl:flex-col">
            <h1 className="text-2xl mb-6">{Footer?.topFooter?.heading}</h1>
            <h3 className="mb-4">{Footer?.topFooter?.subheading}</h3>


            <div className="my-auto">
              <div className=" flex flex-col gap-4 max-w-sm sm:max-w-lg lg:max-w-xl lg:hidden mx-auto">

                <p className="text-sm text-sub-text-color  lg:hidden">{Footer?.topFooter?.description}</p>
                <Link className="text-blue-500 text-sm mb-6" href={Footer?.topFooter?.websiteURL?.url || '/'}>{Footer?.topFooter?.websiteURL?.text}</Link>
              </div>

              <div className=" flex mx-auto max-w-sm sm:max-w-lg gap-4 lg:max-w-xl">
                <Link href={Footer?.app_store || '/'}>
                  <Image className="w-36" src={urlFor(Footer?.topFooter?.downloadOnImage?.appstore).url()} alt="Download on App Store" width={300} height={50} />
                </Link>
                <Link href={Footer?.google_play || '/'}>
                  <Image className="w-36" src={urlFor(Footer?.topFooter?.downloadOnImage?.googleplay).url()} alt="Download on Google Play" width={300} height={50} />
                </Link>
              </div>
            </div>

          </div>

          <div className="inline mx-auto">

            {/* description + appstore_playstore */}
            <div className="hidden flex-col gap-4 max-w-sm sm:max-w-lg lg:max-w-xl mx-auto">

              <p className="text-sm text-sub-text-color ">{Footer?.topFooter?.description}</p>
              <Link className="text-blue-500 text-sm mb-6" href={Footer?.topFooter?.websiteURL?.url || '/'}>{Footer?.topFooter?.websiteURL?.text}</Link>
            </div>

            <div className="hidden  mx-auto max-w-sm sm:max-w-lg lg:max-w-xl">
              <Image className="w-36" src={urlFor(Footer?.topFooter?.downloadOnImage?.appstore).url()} alt="Download on App Store" width={300} height={50} />
              <Image className="w-36" src={urlFor(Footer?.topFooter?.downloadOnImage?.googleplay).url()} alt="Download on Google Play" width={300} height={50} />
            </div>

            <div className='max-w-sm sm:max-w-lg lg:max-w-xl mx-auto'>
              <p className="hidden lg:block mt-6 text-sm text-sub-text-color">{Footer?.topFooter?.description}</p>
            </div>


            {/* contact us section */}
            <div className="my-16 max-w-sm sm:max-w-lg lg:max-w-xl sm:px-6 xl:px-0 mx-auto text-sub-text-color">
              <h1 className="font-medium text-md ">{Footer?.topFooter?.contactUsSection?.title}</h1>
              <h4 className="text-sm my-6">{Footer?.topFooter?.contactUsSection?.description}</h4>

              {Footer?.topFooter?.contactUsSection?.details?.map((detail, index) => (
                <div key={index} className="text-sm my-2">
                  <span className="font-semibold">{detail?.field + ': '}</span>

                  {detail?.URL ?
                    <Link
                      href={detail?.URL}
                      className="text-blue-500">
                      <span>{detail?.value}</span>
                    </Link>
                    :
                    <span>{detail?.value}</span>
                  }

                </div>
              ))}
            </div>
          </div>

          {/* QR whatsapp */}
          <div className="hidden xl:inline xl:mt-6">
            <Image
              className=" w-64 mr-4"
              src={'/home/whatsapp-qr.png'}
              alt="WhatsApp QR"
              width={600} height={600} />
          </div>


        </div>
      </section>

      <footer className=" bg-sub-text-color">
        <div className="2xl:container mx-auto flex flex-col justify-center xl:flex-row gap-6 py-8 px-16">

          <div className="hidden xl:flex text-[0?.7rem] text-gray-50 gap-8 justify-center">
            {Footer?.footerBottom?.links?.map((link, index) => (
              <Link key={index} href={link?.url || '/'}>{link?.text || '/'}</Link>
            ))}
          </div>

          {/* socials container */}
          <div className="flex gap-4 mx-auto">
            {Footer?.footerBottom?.socials?.map((social) => (
              <Link key={social?.link} href={social?.link || '/'}>
                <Image
                  className="w-5 h-5"
                  src={urlFor(social?.image).url()}
                  alt={urlFor(social?.image).url()}
                  key={urlFor(social?.image).url()}
                  width={200} height={200}
                />
              </Link>
            ))}
          </div>

          <div>
            <p className="text-[0?.7rem] text-gray-50 text-center">{Footer?.footerBottom?.copyrightText}</p>
          </div>
        </div>
      </footer>
    </>

  )
};

export default FooterBig;