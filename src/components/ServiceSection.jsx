import React from "react";
import Fade from "react-reveal";
import myPic from "../assets/images/myPic.jpg";
import myPic2 from "../assets/images/myPic2.jpg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
// import myPic33 from "../assets/images/myPic33.jpeg";
import myPic4 from "../assets/images/myPic4.jpg";
import rightPic from "../assets/images/rightPic.jpg"

const ServiceSection = () => {
  return (
    <div className='mt-20'>
         <Fade left>
            <div className="w-full h-[0.5px] bg-gray-100 my-[4rem]"></div>
          </Fade>
        <div className="md:flex justify-center">
          <div className="md:w-1/2 mx-4 flex justify-center ">
            <div className="flex flex-col items-center space-y-3">
              <div className=" w-6 h-6 border rounded-full flex items-center justify-center">
                <p className="">3</p>
              </div>
              <div className="">
                <p className="text-4xl text-center">DIGITAL PRODUCTS</p>
              </div>
              <div className="pt-6 text-center flex flex-col justify-center items-center">
                <p className=" w-[240px]   text-[13px] text-gray-400 mb-6">
                WE IDENTIFY AND BUILD WORLD CLASS DIGITAL PRODUCTS AND SERVICES FOR THE DIGITAL AGE.
                </p>
                <div className="group text-center mt-4 cursor-pointer">
                  <span class="relative inline-block uppercase text-[15px]">
                  EXPLORE DIGITAL PRODUCTS 
                    <span className="transition-transform duration-1000 transform origin-left opacity-0 group-hover:opacity-[1]">
                      <ArrowOutwardIcon />
                    </span>
                    <span class="absolute left-0 inset-x-0 bottom-0 h-[0.5px] bg-white transition-transform duration-1000 transform origin-left scale-x-[0]  group-hover:scale-x-100 group-hover:bg-gray-100"></span>
                  </span>
                </div>
                <div className="relative flex space-x-4 mt-9">
                  <div className="relative group">
                    <div className="w-full max-w-[20rem] mx-auto overflow-hidden">
                      <img
                       src={myPic}
                        alt="my photo"
                        className="w-full h-auto hover:scale-110 transition-transform duration-300 ease-in-out transform-gpu"
                      />
                    </div>
                    <span class="relative inline-block uppercase mt-4">
                    MERCURY TOWERS – INTERACTIVE SALES ROOM
                      <span className="transition-transform duration-1000 transform origin-left opacity-0 group-hover:opacity-[1]">
                        <ArrowOutwardIcon />
                      </span>
                      <span class="absolute left-0 inset-x-0 bottom-0 h-[1px] bg-white transition-transform transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                    </span>
                  </div>
                  <div className="relative group">
                    <div className="w-full max-w-xs mx-auto overflow-hidden ">
                      <img
                        src={myPic2}
                        alt="my photo"
                        className="w-full h-auto hover:scale-110 transition-transform duration-1000 ease-in-out transform-gpu"
                      />
                    </div>
                    <span class="relative inline-block uppercase mt-4">
                      BUKKUN 
                      <span className="transition-transform duration-1000 transform origin-left opacity-0 group-hover:opacity-[1]">
                        <ArrowOutwardIcon />
                      </span>
                      <span class="absolute left-0 inset-x-0 bottom-0 h-[1px] bg-white transition-transform transform duration-1000  origin-left scale-x-0 group-hover:scale-x-100"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Fade top bottom>
            <div className="hidden md:block md:w-[0.5px] md:h-[83vh] sm:h-[67vh] bg-slate-200"></div>
          </Fade>
          <Fade left>
            <div className="md:hidden my-6 w-[100%] h-[0.5px] bg-slate-200" />
          </Fade>
         
          <div className="md:w-1/2 mx-4 flex justify-center ">
            <div className="flex flex-col items-center space-y-3">
              <div className=" w-6 h-6 border rounded-full flex items-center justify-center">
                <p className="">4</p>
              </div>
              <div className="">
                <p className="text-4xl text-center">DIGITAL MARKETING</p>
              </div>
              <div className="pt-6 text-center flex flex-col justify-center items-center">
                <p className=" w-[240px]   text-[13px] text-gray-400 mb-6">
                WE CREATE CONCEPTS & CAMPAIGNS THAT MAKE BRANDS SUCCEED ONLINE.
                </p>
                <div className="group text-center mt-4 cursor-pointer">
                  <span class="relative inline-block uppercase  text-[15px]">
                  EXPLORE DIGITAL MARKETING 
                    <span className="transition-transform duration-1000 transform origin-left opacity-0 group-hover:opacity-[1]">
                      <ArrowOutwardIcon />
                    </span>
                    <span class="absolute left-0 inset-x-0 bottom-0 h-[0.5px] bg-white transition-transform duration-1000 transform origin-left scale-x-[0]  group-hover:scale-x-100 group-hover:bg-gray-100"></span>
                  </span>
                </div>
                <div className="relative flex space-x-4 mt-14">
                  <div className="relative group">
                    <div className="w-full max-w-[20rem] mx-auto overflow-hidden">
                      <img
                        src={rightPic}
                        alt="my photo"
                        className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 ease-in-out transform-gpu"
                      />
                    </div>
                    <span class="relative inline-block uppercase mt-4">
                     VIVI 
                      <span className="transition-transform duration-1000 transform origin-left opacity-0 group-hover:opacity-[1]">
                        <ArrowOutwardIcon />
                      </span>
                      <span class="absolute left-0 inset-x-0 bottom-0 h-[1px] bg-white transition-transform transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                    </span>
                  </div>
                  <div className="relative group">
                    <div className="w-full max-w-[20rem] mx-auto overflow-hidden">
                      <img
                        src={myPic4}
                        alt="my photo"
                        className="w-full h-auto object-cover hover:scale-110 transition-transform duration-1000 ease-in-out transform-gpu"
                      />
                    </div>
                    <span class="relative inline-block uppercase mt-4">
                    ION – THE HARBOUR 
                      <span className="transition-transform duration-1000 transform origin-left opacity-0 group-hover:opacity-[1]">
                        <ArrowOutwardIcon />
                      </span>
                      <span class="absolute left-0 inset-x-0 bottom-0 h-[1px] bg-white transition-transform transform duration-1000  origin-left scale-x-0 group-hover:scale-x-100"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ServiceSection