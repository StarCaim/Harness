import React from "react";
import Nav from "@/Components/Footer";
import Head from "next/head";
import Logo from "public/Cyber_Automotive_LogoV5.png";
import { Menu, Transition } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import react, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/Components/Footer";
import Image2 from "public/thomas.jpg";
import Marshall from "public/Marshall.jpg";

export default function Company() {
  return (
    <>
      <Head>
        <title>Cyber Automotive Rides</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className=" bg-oxford-blue overflow-hidden">
        <div>
          <Image src={Logo} className=" w-2/3 max-w-lg mx-auto" />
        </div>
        <div
          id="nav"
          className=" hidden xl:flex xl:flex-row sticky text-center py-2 overflow-hidden shadow-rose pb-7"
        >
          <div className=" mx-auto">
            <Link href="/" className="cybr-btn w-2 m-auto cybr-btn-default">
              Home<span>_</span>
              <span className="cybr-btn__glitch">Home_</span>
            </Link>
          </div>
          <div className=" mx-auto">
            <Link
              href="/vehicles"
              className="cybr-btn w-2 m-auto cybr-btn-default"
            >
              Vehicles<span>_</span>
              <span className="cybr-btn__glitch">Vehicles_</span>
            </Link>
          </div>
          <div className=" mx-auto">
            <Link
              href="/financing"
              className="cybr-btn w-2 m-auto cybr-btn-default"
            >
              Financing<span>_</span>
              <span className="cybr-btn__glitch">Financing_</span>
            </Link>
          </div>
          <div className=" mx-auto">
            <Link
              href="/company"
              className="cybr-btn w-2 m-auto cybr-btn-active"
            >
              Company<span>_</span>
              <span className="cybr-btn__glitch">Company_</span>
            </Link>
          </div>
        </div>
        <Menu>
          <Menu.Button className="absolute right-5 top-14 xs:right-9 xs:top-20 sm:top-36 sm:right-14 lg:right-32">
            <FaBars className=" text-gray-200 cursor-pointer  m-auto text-3xl xs:text-4xl sm:text-5xl xl:hidden" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-205"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-200"
            leaveTo="transform opacity-0 scale-205"
          >
            <Menu.Items
              id="dropdownNav"
              className=" bg-oxford-blue w-full absolute xl:hidden"
            >
              <ul className=" font-oxta">
                <Menu.Item>
                  <li className="text-center py-7">
                    <Link
                      href="/"
                      className="cybr-btn w-2 m-auto cybr-btn-default"
                    >
                      Home<span>_</span>
                      <span className="cybr-btn__glitch">Home_</span>
                    </Link>
                  </li>
                </Menu.Item>
                <Menu.Item>
                  <li className="text-center py-7">
                    <Link
                      className="cybr-btn w-2 m-auto cybr-btn-default"
                      href="/vehicles"
                    >
                      Vehicles<span>_</span>
                      <span className="cybr-btn__glitch">Vehicles_</span>
                    </Link>
                  </li>
                </Menu.Item>
                <Menu.Item>
                  <li className="text-center py-7">
                    <Link
                      href="/financing"
                      className="cybr-btn w-2 m-auto cybr-btn-active"
                    >
                      Financing<span>_</span>
                      <span className="cybr-btn__glitch">Financing_</span>
                    </Link>
                  </li>
                </Menu.Item>
                <Menu.Item>
                  <li className="text-center py-7">
                    <Link
                      href="/company"
                      className="cybr-btn w-2 m-auto cybr-btn-default"
                    >
                      Company<span>_</span>
                      <span className="cybr-btn__glitch">Company_</span>
                    </Link>
                  </li>
                </Menu.Item>
              </ul>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
      
      <main className=" bg-gradient-to-b from-indigo-dye to-oxford-blue">
        {/* Title And Paragraph */}
        <div className="py-10">
          <h1 className="text-3xl w-1/2 mx-auto my-10 bg-oxford-blue shadow-rose shadow-glow text-rose text-center font-avalon mt-3 p-4 border-2 border-rose" >THE HISTORY OF YOUR FUTURE</h1>
        </div>
        <div className="flex flex-wrap">
          <div className="my-10 xl:w-1/2">
          <p className="mx-auto xl:w-2/3 bg-oxford-blue shadow-robin-egg-blue shadow-glow text-robin-egg-blue text-center font-oxta text-xs mt-3 p-4 border-2 border-robin-egg-blue">In the year 2045, the city of Neo-San Francisco was 
          a bustling metropolis filled with advanced technology and neon lights. Amidst the towering
          skyscrapers and holographic advertisements, a small used car dealership called Cyber
          Automotive stood out like a beacon. The founder of Cyber Automotive, a man named Jack,
          had always had a passion for cars. He saw the potential in the used car market, 
          especially in a city like Neo-SF where people were constantly in need of reliable
          transportation. At Cyber Automotive, Jack and his team were dedicated to finding and
          selling only the highest quality used cars. They scoured the city for the best deals
          and spent hours repairing and refurbishing each vehicle
          before putting it on the lot.</p>
          </div>

        {/* Images */}

          <div className="my-10 xl:w-1/2">
            <Image  src={Marshall} className="xl:w-1/2 mx-auto"/>
          </div>
         <div className="my-10 xl:w-1/2 ">
           <Image src={Image2} className="xl:w-1/2 mx-auto"/>
         </div>
        
        {/* Closing Paragraph */}

        <div className="my-10 xl:w-1/3 bg-oxford-blue shadow-robin-egg-blue shadow-glow text-robin-egg-blue text-center font-oxta text-xs mt-3 p-4 border-2 border-robin-egg-blue mx-auto">
          <p>
          In the early days, business was slow. Many people were skeptical of buying a used car, 
        especially in a city filled with cutting-edge technology. But as word of Cyber Automotive's 
        dedication to quality spread, more and more people began to take notice. As the years passed, 
        Cyber Automotive grew in popularity. It became known as the go-to place for finding a reliable 
        used car in Neo-SF. Jack and his team were always on the lookout for new and exciting vehicles 
        to add to their inventory, and they quickly gained a loyal customer base. Today, Cyber 
        Automotive is a thriving used car dealership in the heart of Neo-SF. It's a testament to 
        Jack's vision and the hard work of his team, who continue to provide the highest quality used 
        cars to the residents of the city. 
          </p>
        </div>
        </div>
      </main>
      

      <Footer>
      </Footer>
    </>
  );
}
