import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import pic from "../../public/photo.avif";

const Home = () => {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 mx:px-20 my-20">
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello i'm a</h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer","Programmer","coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              beatae voluptatem error nulla repellendus corrupti earum quia.
              Aliquid, distinctio est.Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Maxime beatae voluptatem error nulla repellendus
              corrupti earum quia. Aliquid, distinctio est.
            </p>
            <br />
            {/* social media */}
            <div className="flex md:justify-between  justify-center flex-col md:flex-row items-center space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <FaSquareFacebook className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <FaLinkedin className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <FaInstagram className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <FaTelegram className="text-2xl cursor-pointer" />{" "}
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold ">Currently working on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <DiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer  border-[2px]" />
                  </li>
                  <li>
                    <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer border-[2px]" />
                  </li>
                  <li>
                    <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer border-[2px]" />
                  </li>
                  <li>
                    <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer border-[2px]" />{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:ml-48 md:mt-20 order-1 md:order-2">
            <img src={pic} alt="pic" className="rounded-full md:w-[450px] md:h-[450px]" />
          </div>
        </div>
      </div>
      <br />
      <hr />
    </>
  );
};

export default Home;
