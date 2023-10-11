
type Props = {
  children: React.ReactNode,
  bgURL?: string,
};

const MainBanner = (props: Props) => {

  let bgurl = "bg-[url('/hero-cussupport.jpg')] bg-cover bg-center";
  if (props.bgURL) {
    bgurl = props.bgURL;
  }

  return (
    <section className={`${bgurl}`}>
      <div className="2xl:container mx-auto py-16 pb-72">
        {props.children}
      </div>
    </section>
  ) 
}

export default MainBanner;