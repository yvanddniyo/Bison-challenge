import React, {useEffect, useRef} from "react";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HeroTitle from "./HeroTitle";
import { Rotate } from "react-awesome-reveal";

const HeroContent = () => {
 
  return (
    <div className="">
      <HeroTitle />
      <div className="mt-[8rem]">
        <div className="md:flex md:flex-row-reverse md:justify-between">
        <Rotate bottom left>
          <div className="hidden w-16 h-16 border border-sky-200 rounded-full md:flex justify-center items-center">
              <ArrowDownwardIcon size={40} />
            </div>
        </Rotate>
          <div className="">
            <p className="text-center md:mx-auto md:w-[350px]">
              YOU WON’T FIND ANY BEASTS OF BURDEN AT BISON STUDIO. WHAT YOU WILL
              FIND IS A WILD AND UNSTOPPABLE FORCE DEDICATED TO STRATEGIC
              THINKING, GREAT DESIGN AND TECHNICAL FINESSE.
            </p>
          </div>
          
          <div className="flex items-center justify-between md:space-x-32 md:mb-24 mt-4">
            <div className="w-4 h-4 bg-white rounded-full mt-6"></div>
            <div className="text-[11px] mt-4">Dexter® WORKS /17-21</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
