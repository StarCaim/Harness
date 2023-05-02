import React from "react";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer className=" bg-oxford-blue">
        <div className="lg:flex mx-auto">
          {/* start of Phone and Address Block */}
          <div className=" mx-auto py-3 text-center lg:w-1/3">
            <div class=" block w-5/6 text-center mx-auto my-10 bg-oxford-blue px-3 py-5 border-rose border-4 rounded-sm text-rose font-avalon text-3xl max-w-lg">
              <h1>Cyber Automotive</h1>
            </div>

            <div
              id="contact"
              className=" border-2 bg border-robin-egg-blue w-8/12 mx-auto shadow-robin-egg-blue shadow-glow p-5"
            >
              <span>
                <Link
                  href="tel:4054106918"
                  className="text-robin-egg-blue hover:text-rose"
                >
                  <BsFillTelephoneFill className="float-left mr-2 text-2xl" />
                  (405) 410-6918
                </Link>
              </span>
              <br />
              <br />
              <span>
                <Link
                  href="https://www.google.com/maps/place/Canadian+Valley+Technology+Center+-+El+Reno+Campus/@35.5090955,-97.8850555,17z/data=!3m1!4b1!4m5!3m4!1s0x87b2273d2f0c8469:0xcf73259de01a2b56!8m2!3d35.5090912!4d-97.8828668"
                  target="_blank"
                  className="text-robin-egg-blue hover:text-rose"
                >
                  <FaMapMarkerAlt className="float-left mr-2 text-2xl" />
                  6905 U.S Rt. 66 <br /> El Reno, OK 73036
                </Link>
              </span>
            </div>
          </div>
          {/* start of Hours Block */}
          <div className=" mx-auto py-3 text-center lg:w-1/3">
            <div class=" block w-5/6 text-center mx-auto my-10 bg-oxford-blue px-3 py-5 border-rose border-4 rounded-sm text-rose font-avalon text-3xl max-w-lg">
              <h1>Hours</h1>
            </div>

            <div
              id="hours"
              className=" border-2 border-robin-egg-blue w-3/4 mx-auto shadow-robin-egg-blue shadow-glow p-5"
            >
              <ul className="hours text-robin-egg-blue">
                <li>
                  <span className="day">MONDAY</span>
                  <span className="time">8AM-7PM</span>
                </li>
                <li>
                  <span className="day">TUESDAY</span>
                  <span className="time">8AM-7PM</span>
                </li>
                <li>
                  <span className="day">WEDNESDAY</span>
                  <span className="time">8AM-7PM</span>
                </li>
                <li>
                  <span className="day">THURSDAY</span>
                  <span className="time">8AM-7PM</span>
                </li>
                <li>
                  <span className="day">FRIDAY</span>
                  <span className="time">8AM-7PM</span>
                </li>
                <li>
                  <span className="day">SATURDAY</span>
                  <span className="time">8AM-7PM</span>
                </li>
                <li>
                  <span className="day">SUNDAY</span>
                  <span className="time">CLOSED</span>
                </li>
              </ul>
            </div>
          </div>
          {/* start of Social Media Block */}
          <div className=" mx-auto py-3 text-center lg:w-1/3">
            <div class=" block w-5/6 text-center mx-auto my-10 bg-oxford-blue px-3 py-5 border-rose border-4 rounded-sm text-rose font-avalon text-3xl max-w-lg">
              <h1>Social Media</h1>
            </div>

            <div
              id="socials"
              className=" max-w-xs border-2 border-robin-egg-blue w-7/12 mx-auto shadow-robin-egg-blue shadow-glow p-5"
            >
              <span>
                <Link
                  href="https://www.instagram.com/cyber_automotive/"
                  target="_blank"
                  className="text-robin-egg-blue hover:text-rose"
                >
                  <AiFillInstagram className="float-left mr-2 text-3xl" />
                  INSTAGRAM
                </Link>
              </span>
              <br />
              <br />
              <span>
                <Link
                  href="https://twitter.com/CyberAutoOffic"
                  target="_blank"
                  className="text-robin-egg-blue hover:text-rose"
                >
                  <AiFillTwitterSquare className="float-left mr-2 text-3xl" />
                  TWITTER
                </Link>
              </span>
              <br />
              <br />
              <span>
                <Link
                  href="https://www.facebook.com/profile.php?id=100088482920649&is_tour_dismissed=true"
                  target="_blank"
                  className="text-robin-egg-blue hover:text-rose"
                >
                  <AiFillFacebook className="float-left mr-2 text-3xl" />
                  FACEBOOK
                </Link>
              </span>
            </div>
          </div>
        </div>
        {/* start of Bottom of Footer */}
        <div className="text-center text-sm mt-10 border-t-2 text-white lg:flex">
          <div className="px-10 lg:text-left lg:pl-4">
            <span>2022-2023 Cyber Automotive &copy;</span>
            <br />
            <span>
              By placing calls to this dealership you agree to the{" "}
              <Link
                className=" text-robin-egg-blue hover:text-rose underline"
                href="/terms_and_conditions"
                target={"_blank"}
              >
                Terms and Conditions of Use
              </Link>
              .
            </span>
          </div>
          <div className=" px-10 lg:flex-1 lg:text-right lg:pr-4">
            <span className="hidden lg:inline">
              <br />
            </span>
            <Link
              className="text-robin-egg-blue hover:text-rose lg:mr-10"
              href="/terms_and_conditions"
              target={"_blank"}
            >
              Terms and Conditions
            </Link>
            <br className="lg:hidden" />
            <Link className="text-robin-egg-blue hover:text-rose" href="">
              Dealer Sign-in
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
