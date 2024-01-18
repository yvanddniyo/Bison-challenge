import React from "react";
import Fade from "react-reveal";
import myPhoto from "../assets/images/myPhoto.jpg";
import myphoto1 from "../assets/images/myphoto1.jpg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import rightPic from "../assets/images/rightPic.jpg";
import rightPic1 from "../assets/images/rightPic1.jpg";

const Services = () => {
  return (
    <div>
      <div className=" ">
        <div className="mt-[8rem]">
          <Fade left>
            <div className="w-full h-[0.5px] bg-gray-100"></div>
          </Fade>
          <div className="flex justify-between items-center">
            <div className="flex my-5 space-x-6">
              <div className="group">
                <span class="relative inline-block uppercase">
                  Services
                  <span class="absolute left-0 inset-x-0 bottom-0 h-[0.5px] bg-white transition-transform transform origin-left scale-x-0 group-hover:scale-x-100 "></span>
                </span>
              </div>
              <div className="group">
                <span class="relative inline-block uppercase">
                  All Projects
                  <span class="absolute left-0 inset-x-0 bottom-0 h-[1px] bg-white transition-transform transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                </span>
              </div>
            </div>
            <div className="text-[13px]">/04</div>
          </div>
          <Fade left>
            <div className="w-full my-3  h-[0.5px] bg-gray-100"></div>
          </Fade>
          
        </div>
        <div className="md:flex justify-center">
          <div className="md:w-1/2 mx-4 flex justify-center ">
            <div className="flex flex-col items-center space-y-3">
              <div className=" w-6 h-6 border rounded-full flex items-center justify-center">
                <p className="">1</p>
              </div>
              <div className="">
                <p className="text-4xl">E-COMMERCE</p>
              </div>
              <div className="pt-6 text-center flex flex-col justify-center items-center">
                <p className=" w-[240px]   text-[13px] text-gray-400">
                  WE SPECIALIZE IN BUILDING HIGH PERFORMING ECOMMERCE WEBSITES
                  THAT ARE ENJOYABLE AND DRIVE SALES.
                </p>
                <div className="group text-center mt-4 cursor-pointer">
                  <span class="relative inline-block uppercase text-[15px]">
                    EXPLORE E-COMMERCE
                    <span className="transition-transform duration-1000 transform origin-left opacity-0 group-hover:opacity-[1]">
                      <ArrowOutwardIcon />
                    </span>
                    <span class="absolute left-0 inset-x-0 bottom-0 h-[0.5px] bg-white transition-transform duration-1000 transform origin-left scale-x-[0]  group-hover:scale-x-100 group-hover:bg-gray-100"></span>
                  </span>
                </div>
                <div className="relative flex space-x-4 mt-8">
                  <div className="relative group">
                    <div className="w-full max-w-xs mx-auto overflow-hidden">
                      <img
                       src={myPhoto}
                        alt="my photo"
                        className="w-full h-auto hover:scale-110 transition-transform duration-300 ease-in-out transform-gpu"
                      />
                    </div>
                    <span class="relative inline-block uppercase mt-4">
                      FLOREAL
                      <span className="transition-transform duration-1000 transform origin-left opacity-0 group-hover:opacity-[1]">
                        <ArrowOutwardIcon />
                      </span>
                      <span class="absolute left-0 inset-x-0 bottom-0 h-[1px] bg-white transition-transform transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                    </span>
                  </div>
                  <div className="relative group">
                    <div className="w-full max-w-xs mx-auto overflow-hidden">
                      <img
                        src={myphoto1}
                        alt="my photo"
                        className="w-full h-auto hover:scale-110 transition-transform duration-1000 ease-in-out transform-gpu"
                      />
                    </div>
                    <span class="relative inline-block uppercase mt-4">
                      BOOST
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
                <p className="">2</p>
              </div>
              <div className="">
                <p className="text-4xl">WEBSITES</p>
              </div>
              <div className="pt-6 text-center flex flex-col justify-center items-center">
                <p className=" w-[240px]   text-[13px] text-gray-400">
                WE BRING THE BEST IN STRATEGY, DESIGN & TECH TO HELP BRANDS TELL THEIR STORY AND CONNECT TO THEIR CUSTOMERS
                </p>
                <div className="group text-center mt-4 cursor-pointer">
                  <span class="relative inline-block uppercase text-[15px]">
                  EXPLORE WEBSITES
                    <span className="transition-transform duration-1000 transform origin-left opacity-0 group-hover:opacity-[1]">
                      <ArrowOutwardIcon />
                    </span>
                    <span class="absolute left-0 inset-x-0 bottom-0 h-[0.5px] bg-white transition-transform duration-1000 transform origin-left scale-x-[0]  group-hover:scale-x-100 group-hover:bg-gray-100"></span>
                  </span>
                </div>
                <div className="relative flex space-x-4 mt-8">
                  <div className="relative group">
                    <div className="w-full max-w-xs mx-auto overflow-hidden">
                      <img
                        src={rightPic}
                        alt="my photo"
                        className="w-full h-auto hover:scale-110 transition-transform duration-300 ease-in-out transform-gpu"
                      />
                    </div>
                    <span class="relative inline-block uppercase mt-4">
                     FORTRESS GARDENS 
                      <span className="transition-transform duration-1000 transform origin-left opacity-0 group-hover:opacity-[1]">
                        <ArrowOutwardIcon />
                      </span>
                      <span class="absolute left-0 inset-x-0 bottom-0 h-[1px] bg-white transition-transform transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                    </span>
                  </div>
                  <div className="relative group">
                    <div className="w-full max-w-xs mx-auto overflow-hidden">
                      <img
                        src={rightPic1}
                        alt="my photo"
                        className="w-full h-auto hover:scale-110 transition-transform duration-1000 ease-in-out transform-gpu"
                      />
                    </div>
                    <span class="relative inline-block uppercase mt-4">
                     MERCURY TOWERS 
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
    </div>
  );
};


export default Services;
