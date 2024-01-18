import { useState, useEffect, useRef } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import SideNavbar from "./SideNavbar";

const NavBar = () => {
  const [menu, setMenu] = useState(true);
  const handleMenu = () => {
    setMenu(!menu);
  };
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" }); //allow us to settle data from the top when get loaded.
  });
  return (
    <div ref={divRef} className="w-full  ">
      <div className="flex justify-between pt-9 text-[12px] font-bold ">
        <div className="cursor-pointer">LOGO</div>
        <div className=" md:flex gap-4 md:gap-7 text-[12px] font-bold hidden">
          <span class="relative inline-block uppercase  text-[12px] group cursor-pointer">
            ABOUT
            <span class="absolute left-0 inset-x-0 bottom-0 h-[0.5px] bg-white transition-transform duration-1000 transform origin-left scale-x-[0]  group-hover:scale-x-100 group-hover:bg-gray-100"></span>
          </span>
          <span class="relative inline-block uppercase  text-[12px] group cursor-pointer">
            SERVICES
            <span class="absolute left-0 inset-x-0 bottom-0 h-[0.5px] bg-white transition-transform duration-1000 transform origin-left scale-x-[0]  group-hover:scale-x-100 group-hover:bg-gray-100"></span>
          </span>
          <span class="relative inline-block uppercase  text-[12px] group cursor-pointer">
            BLOGS
            <span class="absolute left-0 inset-x-0 bottom-0 h-[0.5px] bg-white transition-transform duration-1000 transform origin-left scale-x-[0]  group-hover:scale-x-100 group-hover:bg-gray-100"></span>
          </span>
          <span class="relative inline-block uppercase  text-[12px] group cursor-pointer">
            CONTACT
            <span class="absolute left-0 inset-x-0 bottom-0 h-[0.5px] bg-white transition-transform duration-1000 transform origin-left scale-x-[0]  group-hover:scale-x-100 group-hover:bg-gray-100"></span>
          </span>
        </div>
        <div className="opacity-[0.6] cursor-pointer text-center ">
          KIGALI / 19:02
        </div>
        <div onClick={handleMenu} className="md:hidden cursor-pointer">
          {menu ? <DragHandleIcon size={30} /> : <CloseIcon size={30} />}
        </div>
        <div
          className={
            !menu
              ? `fixed left-0 top-[12%] w-[100%] h-full border-r-gray-900 bg-[#171616] ease-in-out duration-500 md:left-[-100%] text-white `
              : "fixed left-[-100%]"
          }
        >
          <SideNavbar />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
