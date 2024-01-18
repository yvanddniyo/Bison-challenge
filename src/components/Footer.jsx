import React, {useEffect, useRef} from "react";
import { navigation } from "../Data/constants";
import { socialMedia } from "../Data/constants";
import Fade from "react-reveal";
import { Rotate } from "react-awesome-reveal";
import ArrowUpWardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
    
  return (
    <div  className="mt-[10rem]">
      <Fade left>
        <div className="w-full h-[0.5px] bg-gray-100 my-[4rem]"></div>
      </Fade>
      <div className="md:flex justify-between">
        <div className="w-5 h-5 bg-white rounded-full mb-6"></div>
        <div className="md:w-1/3 w-full md:text-4xl text-[17px] text-gray-400 mb-6">
          We love working alongside ambitious brands and people.
          <span className="text-white hover:underline cursor-pointer">
            {" "}
            <a href="">Drop us a line</a>
          </span>{" "}
          if you’d like us to build something great together
        </div>
        <div className="mb-4">
          {navigation.map((nav, index) => (
            <p key={index}>
              <a href="">{nav}</a>
            </p>
          ))}
        </div>
        <div className="">
          {socialMedia.map((media, index) => (
            <p key={index}>
              <a href="">{media}</a>
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-20">
        <div className="mr-6">
          <p>LOGO®</p>
        </div>
        <div className="flex space-x-[100px] mb-6">
          <div className="text-[12px]">
            <p>BISON@BISON-STUDIO.COM</p>
            <p>+250780076941</p>
            <p>
              <a href="#">PRIVACY POLICY</a>
            </p>
            <p>
              <a href="#">TERMS AND CONDITION</a>
            </p>
          </div>
          <div className="">
            <Rotate bottom left>
              <div className="w-16 h-16 border border-sky-200 rounded-full flex justify-center items-center">
                <ArrowUpWardIcon size={40} />
              </div>
            </Rotate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
