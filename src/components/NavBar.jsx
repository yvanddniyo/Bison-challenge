import {useState, useEffect, useRef} from "react";
import { navBar } from "../Data/constants";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import SideNavbar from "./SideNavbar";

const NavBar = () => {
  const [menu, setMenu] = useState(true)
  const handleMenu = () => {
    setMenu(!menu)
  }
  const divRef = useRef(null);
  useEffect(() => {
      divRef.current.scrollIntoView({ behavior: 'smooth' }) //allow us to settle data from the top when get loaded.
    })
  return (
    <div ref={divRef} className="w-full  ">
      <div className="flex justify-between pt-9 text-[12px] font-bold ">
        <div className="cursor-pointer">LOGO</div>
        <div className=" md:flex gap-4 md:gap-7 text-[12px] font-bold hidden">
          <a href="#" className="relative">
            <span className='before:content-[""]  before:h-[1px]  before:bg-white before:absolute before:left-0 before:right-0 before:bottom-[-3px] before:w-full before:transition-all origin-top-right before:opacity-0 hover:before:opacity-100'>
              ABOUT
            </span>
          </a>
          <a href="#" className="relative">
            <span className='before:content-[""]  before:h-[1px]  before:bg-white before:absolute before:left-0 before:right-0 before:bottom-[-3px] before:w-full before:transition-all origin-top-right before:opacity-0 hover:before:opacity-100'>
             SERVICES
            </span>
          </a>
          <a href="#" className="relative">
            <span className='before:content-[""]  before:h-[1px]  before:bg-white before:absolute before:left-0 before:right-0 before:bottom-[-3px] before:w-full before:transition-all origin-top-right before:opacity-0 hover:before:opacity-100'>
              BLOGS
            </span>
          </a>
          <a href="#" className="relative transition ease-in-out">
            <span className='before:content-[""]  before:h-[1px]  before:bg-white before:absolute before:left-0 before:right-0 before:bottom-[-3px] before:w-full before:transition-all before:origin-top-right before:opacity-0 hover:before:opacity-100'>
              CONTACT
            </span>
          </a>
          
        </div>
        <div className="opacity-[0.6] cursor-pointer text-center ">KIGALI / 19:02</div>
        <div onClick={handleMenu}  className="md:hidden cursor-pointer">
         { menu? <DragHandleIcon size={30}/> : <CloseIcon size={30} />}
        </div>
        <div className={!menu ? `fixed left-0 top-[12%] w-[100%] h-full border-r-gray-900 bg-[#171616] ease-in-out duration-500 md:left-[-100%] text-white ` : " fixed left-[-100%]"}>
          <SideNavbar />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
