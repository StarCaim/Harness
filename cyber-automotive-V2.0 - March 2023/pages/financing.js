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

export default function Financing() {
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
              className="cybr-btn w-2 m-auto cybr-btn-active"
            >
              Financing<span>_</span>
              <span className="cybr-btn__glitch">Financing_</span>
            </Link>
          </div>
          <div className=" mx-auto">
            <Link
              href="/company"
              className="cybr-btn w-2 m-auto cybr-btn-default"
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
      <Footer />
    </>
  );
}