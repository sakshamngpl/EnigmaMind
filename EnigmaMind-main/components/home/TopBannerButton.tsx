import Home from "@/constants/Home"
import Image from "next/image"

interface ButtonProps {
  children: React.ReactNode
};

const TopBannerButton = (props: ButtonProps) => {
  return (
    <button className="flex mx-auto gap-3 items-center justify-center px-5 py-3 border-2 border-red-500 rounded-full bg-white">
      <Image src={Home.topBanner.bannerButton.imageURL} alt="" width={22} height={22}/>
      <span className="text-gray-700">{props.children}</span>
    </button>
  )
}

export default TopBannerButton;