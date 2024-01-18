import React from 'react'

const SideNavbar = () => {
  return (
    <div>
        <div className="container flex justify-between pl-10 pr-[2rem] z-[-999]">
            <div className="z-[999]">
                <div className="w-3 h-3 bg-white rounded-full mb-8">
                    <div className="pt-8">
                        <ul className=''>
                            <li className=''>
                                <a  href="" className="text-2xl ">Instagram</a>
                            </li>
                            <li className='pt-3'>
                                <a href="" className="text-2xl">Twitter</a>
                            </li>
                            <li className='pt-3'>
                                <a href="" className="text-2xl">Facebook</a>
                            </li>
                            <li className='pt-3'>
                                <a href="" className="text-2xl">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3 h-3 bg-white rounded-full my-10"></div>
                    <div className="w-32 mb-12">
                        <h3 className="text-[10px]">Developers Located in Rwanda br Kigali City <span>Kg 475 Street</span></h3>
                    </div>
                    <div className="mb-16">
                       <h2 className='text-3xl'>LOGO</h2> 
                    </div>
                </div>
            </div>
            <div className="two">
                <div className="mb-8">
                    <p className='text-[10px]'> /MENU</p>
                    <div className="pt-5">
                        <ul className=''>
                            <li className=''>
                                <a  href="" className="text-2xl text-white font-body ">HOME</a>
                            </li>
                            <li className='pt-3'>
                                <a href="" className="text-2xl text-gray-200 opacity-[0.6] font-body">ABOUT</a>
                            </li>
                            <li className='pt-3'>
                                <a href="" className="text-2xl text-gray-200 opacity-[0.6] font-body">SERVICES</a>
                            </li>
                            <li className='pt-16'>
                                <a href="" className="text-2xl text-gray-200  font-body opacity-[0.6]">CONTACT</a>
                            </li>
                            <li className='pt-3'>
                                <a href="" className="text-2xl text-gray-200 opacity-[0.6]  font-body">BLOGS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideNavbar