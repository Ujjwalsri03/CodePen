import React, { useState } from 'react';
import { HiChevronDoubleLeft } from "react-icons/hi";
import {Link} from "react-router-dom"
import Logo from "../assets/logo.png"


const Home = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);

  return (
    <>
      <div className={`w-2 min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-200 ease-in-out ${isSideMenu ? "w-2" : "flex-[.2] xl:flex-[.2]"}`}>
         <div onClick={() => setIsSideMenu(!isSideMenu)} className='w-8 h-8 bg-black rounded-tr-lg rounded-br-lg absolute -right-8 flex    items-center justify-center cursor-pointer'>
            <HiChevronDoubleLeft className='text-white text-xl'/>
        </div>

        <div className='overflow-hidden w-full flex flex-col gap-4 '>
          {/* {logo-section}  */}
          <Link to={"/home"}>
            <img src={Logo} alt="logo" className='object-contain w-72 h-auto'/>
          </Link>
          {/* {start coding} */}
          <Link to={"/"}>
            <div className='px-6 py-3 flex items-center justify-center rounded-xl border border-gray-800 cursor-pointer group hover:border-gray-200 animate-border-spin '>
               <p className='text-white group-hover:text-gray-200 extra'>Start Coding</p>
            </div>
          </Link>
          {/* {home nav} */}
        </div>
      </div>

      <div></div>
    </>
  );
};

export default Home;