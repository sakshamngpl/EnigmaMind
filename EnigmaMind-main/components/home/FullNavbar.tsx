
// lib utils
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// components
import GeneralButton from "../GeneralButton";
import DropDownCard from "./DropDownCard";
import Home from "@/constants/Home";
import IndustryDropdownCard from "./IndustryDropdownCard";
import Navbar from "@/constants/Navbar";

const FullNavbar = () => {

  // ! state = false, but might be true while debugging
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);


  return (
    <nav className="hidden w-full xl:block absolute top-0 ">


      <div className="w-full xl:flex py-8 px-10 text-white 2xl:container mx-auto">

        {/* LOGO */}
        <div className="flex items-center">
          <Image src={'/white-logo.png'} className=" aspect-auto" alt="Moobidesk" height={20} width={190} />
        </div>


        {/* NAVBAR UL LI */}
        <div className="flex items-center cursor-pointer h-12">
          <ul className="flex h-full items-center justify-center gap-5 ml-10 2xl:ml-20 ">

            {/* products dropdown button */}
            <li className="flex items-center justify-center h-full px-2 relative hover:bg-white hover:text-gray-800"

              // ! below line might be commented for debugging
              onMouseOver={() => setProductsDropdown(true)}
              onMouseOut={() => setProductsDropdown(false)}
            >



              <span className="h-full flex items-center justify-center ">Products</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M7 10l5 5 5-5z" fill="white"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>

              {productsDropdown &&
                <div className="absolute top-12 -left-10 p-2 bg-white flex" id="products_dropdown">

                  {/* MAP THE PRODUCT CARDS */}
                  {Navbar.dropdown_links[0].dropdown.map((card, index) => (

                    <Link href={card.url} key={index}>
                      <DropDownCard
                        key={card.imageURL}
                        imageURL={card.imageURL}
                        heading={card.title}
                        description={card.description || ''}
                      />
                    </Link>
                  ))}
                </div>
              }
            </li>

            {/* industries dropdown button */}
            <li className="flex items-center justify-center h-full px-2 relative hover:bg-white hover:text-gray-800"
              onMouseOver={() => setIndustriesDropdown(true)}
              onMouseOut={() => setIndustriesDropdown(false)}
            >
              <span>Industries</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M7 10l5 5 5-5z" fill="white"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>

              {industriesDropdown &&
                <div className="absolute top-12 -left-10 bg-white flex flex-col p-2 w-max gap-1" id="industries_dropdown">

                  {/* MAP THE INDUSTRY CARDS */}
                  {Navbar.dropdown_links[1].dropdown.map((card, index) => (
                    <Link href={card.url} key={index}>
                      <IndustryDropdownCard
                        key={card.imageURL}
                        imageURL={card.imageURL}
                        heading={card.title}
                      />
                    </Link>
                  ))}

                </div>
              }
            </li>
            {Navbar.links.map((link, index) => (
              <div key={index} className="py-2 flex px-4 my-2">
                <Link href={link.link}>
                  <h1 className="cursor-pointer hover:text-blue-400 transition-all">{link.name}</h1>
                </Link>
              </div>
            ))}
          </ul>
        </div>

        {/* LOGIN + BUTTON */}
        <div className="ml-auto gap-6 h-12 flex items-center">
          <Link href={Navbar.button.link}>
            <GeneralButton>{Navbar.button.name}</GeneralButton>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default FullNavbar;