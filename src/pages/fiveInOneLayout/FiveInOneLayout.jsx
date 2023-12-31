import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FaGreaterThan } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const FiveInOneLayout = () => {
  const sidenav = ["Profile", "Wishlist", "Address", "Orders"];
  const [isSideBarOpen,setSideBarOpen] = useState("-left-[100%]");
  return (
    <div className='flex relative'>
      <div className={`absolute duration-700 sm:relative ${isSideBarOpen} bg-white z-40 w-1/2  h-full sm:w-[15%] sm:left-0 sm:px-5 sm:py-16 sm:border-r-2 sm:flex justify-end sm:h-[70vh] items-center `}>
      <div className='sm:hidden absolute top-1 right-1 h-8 w-8 flex justify-center rounded-full items-center bg-slate-200'>
      <RxCross2 className='font-bold' onClick={(()=>setSideBarOpen("-left-[100%]"))}/>
      </div>
        <div className='w-full flex justify-center items-center  flex-col'>
          {sidenav.map((nav, index) => (
            <NavLink
              key={index}
              to={`/fiveinone/${nav.toLowerCase()}`}
              activeClassName='active' // Define your own class for the active state
              className='p-2 my-2 pl-5 text-lg border-l-4 border-transparent hover:border-red-700 text-start w-full duration-200'
              onClick={()=>setSideBarOpen("-left-[100%]")}
            >
              {nav}
            </NavLink>
          ))}
        </div>
      </div>
      <div className='sm:hidden absolute top-1 left-1 h-8 w-8 flex justify-center rounded-full items-center bg-slate-200'  onClick={(()=>setSideBarOpen("left-0"))}>
        <FaGreaterThan />
      </div>
      <Outlet />
    </div>
  );
};

export default FiveInOneLayout;
