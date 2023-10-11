import Head from "next/head"

const SEO = ({ title, description }: {
  title: string,
  description: string
}) => {
  return (
    <Head>
      <title>{title || 'Moobidesk'}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="author" content="tsarprince" />
      <meta name="twitter:creator" content="@tsarprince" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      {/* <meta property="og:url" content="https://www.moobidesk.com/" /> */}
      {/* <meta property="og:image" content="https://res.cloudinary.com/zurichat/image/upload/v1632832916/Assets/seo-image.png" /> */}
      {/* <meta property="og:image:secure_url" content="https://res.cloudinary.com/zurichat/image/upload/v1632832916/Assets/seo-image.png" /> */}
      {/* <meta property="og:image:type" content="image/png" /> */}
      {/* <meta property="og:image:width" content="1200" /> */}
      {/* <meta property="og:image:height" content="630" /> */}
    </Head>
  )
}

export default SEO;