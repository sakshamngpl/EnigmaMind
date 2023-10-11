import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from 'context/appContext';
import { client } from "lib/client";
import {
  HomePage,
  CustomerSupportPage,
  EnterprisePage,
  WhatsappPage,
  LiveChatPage,
  InsurancePage,
  RetailPage,
  PricingPage,
  PartnerPage,
  RequestDemoPage,
  FooterBig,
  FooterSmall,
  Navbar,
  Documents
} from '../sanity/schema'

const SanityLoader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true)
  const [errored, setErrored] = useState(false)
  const { setData } = useContext(AppContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Documents[] = await client.fetch(`*[_type in [
          'homePage',
          'customerSupportPage',
          'enterprisePage',
          'whatsappPage',
          'liveChatPage',
          'insurancePage',
          'retailPage',
          'pricingPage',
          'partnerPage',
          'requestDemoPage',
          'footerBig',
          'footerSmall',
          'navbar'
        ]]`)
        setData(data)
        setLoading(false)
      } catch (error: any) {
        setErrored(true)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return <div>
    {
      loading
        ? <div className='flex items-center justify-center h-screen'>Fetching data from CMS...</div>
        :
        errored
          ? <div className='flex items-center justify-center h-screen'>
            {'Oops! Something Went Wrong 💀. Try Reloading the page.'}
          </div >
          : <div>{children}</div>
    }
  </div>
}

export default SanityLoader