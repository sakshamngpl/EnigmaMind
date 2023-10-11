const footer = {

  topFooter: {
    heading: 'About Moobidesk',
    subheading: 'Moobidesk is a product of Maven Lab Pte Ltd',
    description: `Founded in 2006, Maven Lab is a trusted software-as-a-service (SaaS) company in Singapore dedicated to delivering innovative customer engagement solutions to leading brands, call centers and the government. Maven Lab believe in making it easy and affordable for businesses to create outstanding customer experiences while meeting key business metrics.`,
    websiteURL: {
      text: 'Visit corporate website arrow_forward',
      url: 'https://www.mavenlab.com/',
    },
    downloadOnImage: {
      appstore: '/images/app-store-logo.png',
      googleplay: '/images/google-play-logo.png',
    },

    contactUsSection: {
      title: 'Contact Us',
      description: 'We’re friendly bunch and are more than happy to answer any of your questions! Our helpdesk is open from Monday to Friday between 9am to 6pm (Singapore Time), and we will always try to respond to your queries within 24 hours.',

      /*
      DETAILS BLUEPRINT
        [field: value]
        Address: 998 Toa Payoh North, #02-01, Singapore 318993
        Email: enquiry@moobidesk.com
        Phone: +65 6259 0170
        SMS: +65 8799 6394
        WhatsApp: +65 8799 6394
      */
      details: [
        {
          field: 'Address',
          value: '998 Toa Payoh North, #02-01, Singapore 318993',
        },
        {
          field: 'Email',
          value: 'enquiry@moobidesk.com',
          URL: 'mailto:enquiry@moobidesk.com'
        },
        {
          field: 'Phone',
          value: '+65 6259 0170',
        },
        {
          field: 'SMS',
          value: '+65 8799 6394',

          // so that it can become a URL
          URL: encodeURI('sms:+65 8799 6394'),
        },
        {
          field: 'WhatsApp',
          value: '+65 8799 6394',
          URL: 'https://wa.me/6587996394',
        },
      ],
    },
  },

  footerBottom: {
    socials: [
      {
        imageURL: '/icons/icon-facebook.svg',
        link: 'https://www.facebook.com/Moobidesk/',
      },
      {
        imageURL: '/icons/icon-instagram.svg',
        link: 'https://www.instagram.com/moobidesksg/',
      },
      {
        imageURL: '/icons/icon-youtube.svg',
        link: 'https://www.youtube.com/channel/UCYm87D9vyo-5rCAyqaTwjbw',
      },
      {
        imageURL: '/icons/icon-linkedin.svg',
        link: 'https://www.linkedin.com/company-beta/13265722/',
      },
    ],


    copyrightText: '© 2023 All rights reserved. Moobidesk is a product of Maven Lab Pte Ltd',


    // todo : put the urls here
    links: [
      {
        text: 'Home',
        url: '/',
      },
      {
        text: 'Products',
        url: '/customer-support-solution',
      },
      {
        text: 'Industries',
        url: '/insurance',
      },
      {
        text: 'Partner',
        url: '/partner',
      },
      {
        text: 'Pricing',
        url: '/pricing',
      },
      {
        text: 'Contact Us',
        url: '/#contact-us',
      },
      {
        text: 'Knowledge Base',
        url: '/knowledge-base',
      },
      {
        text: 'Blog',
        url: 'https://moobidesk-blog.vercel.app/',
      },
    ],

  },



  app_store: 'https://itunes.apple.com/sg/app/moobidesk/id1220287272?mt=8',
  google_play: 'https://play.google.com/store/apps/details?id=com.mavenlab.moobidesk&hl=en',
}

export default footer