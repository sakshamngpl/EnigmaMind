import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/constants/Navbar";

const WhiteNavbar: NextPage = () => {

  const [showMenu, setShowMenu] = useState(false);
  const showMenuClass = (showMenu ? 'right-0' : '-right-full');

  const cross_icon_width = (showMenu ? 'w-8 transition-all duration-100 opacity-100' : 'w-8 transition-all duration-100 opacity-0');
  const hambu_icon_width = (!showMenu ? 'w-8 transition-all duration-100 opacity-100' : 'w-8 transition-all duration-100 opacity-0');


  return (

    <>
      <nav className="sticky z-10 top-0 bg-gray-100 shadow-lg overflow-y-visibles overflow-x-hidden">

        <div className="2xl:container mx-auto p-4 flex">


          {/* logo div */}
          <div className="w-max flex ">
            <Image className="w-36 mx-auto my-auto" src={'/black-logo.png'} alt="moobidesk" width={1000} height={200} />
          </div>


          {/* <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M7 10l5 5 5-5z" fill="white"></path><path d="M0 0h24v24H0z" fill="none"></path></svg> */}

          {/* when vp > xl */}
          <div className="hidden xl:flex">

          </div>

          {/* when vp < xl */}

          {/* hamburger div */}
          <div className=" flex xl:hidden ml-auto"
            onClick={() => setShowMenu((true))}
          >
            <Image
              className={`${hambu_icon_width}`}
              src={'/icons/hamburg.svg'} alt="menu" width={10} height={10} />
          </div>



        </div>
      </nav>
      <MenuPopup
        setShowMenu={setShowMenu}
        showMenuClass={showMenuClass}
        cross_icon_width={cross_icon_width}
      />
    </>
  )
}


type MenuPopupProps = {
  setShowMenu: (value: boolean) => void,
  showMenuClass: string,
  cross_icon_width: string,
};

const MenuPopup = (props: MenuPopupProps) => {

  const [showProducts, setShowProducts] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);

  return (
    <>
      {/* MENU POPUP */}
      <div className={`bg-white transition-all duration-300 absolute z-20 top-0 ${props.showMenuClass} w-full flex flex-col`}>

        {/* TOP PORTION */}
        <div className="bg-white shadow-sm z-30 p-4 flex">

          {/* logo div */}
          <div className="w-max flex ">
            <Image className="w-44 mx-auto my-auto" src={'/black-logo.png'} alt="moobidesk" width={1000} height={200} />
          </div>

          {/* CLOSE CROSS BUTTON */}
          <div className="ml-auto"
            onClick={() => props.setShowMenu(false)}
          >
            <Image className={`${props.cross_icon_width}`} src={'/icons/icon-cross.svg'} alt="close menu" width={100} height={100} />
          </div>

        </div>

        {/* MENU */}
        <div className="p-4 bg-slate-50">
          {Navbar.dropdown_links.map((link, index) => (
            <>
              <div key={index} className="py-2 flex px-4 my-2"
                onClick={() => setShowProducts(((showProducts) => !showProducts))}
              >
                <h1 className="flex cursor-pointer hover:text-blue-500 transition-all">{link.name}
                  <svg className=" hover:fill-blue-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M7 10l5 5 5-5z" fill="currentcolor"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                </h1>
              </div>

              {showProducts &&
                <>
                  <div className="flex">
                    <Image src={'/navbar/bullet-line.png'} width={30} height={100} alt="" />
                    { }
                  </div>
                </>
              }
            </>
          ))}

          {Navbar.links.map((link, index) => (
            <>
              <div key={index} className="py-2 flex px-4 my-2">
                <h1 className="cursor-pointer hover:text-blue-400 transition-all">{link.name}</h1>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}



export default WhiteNavbar;