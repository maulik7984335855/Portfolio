import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import {Link} from 'react-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
        id:1,
        text:"Home"
    },
    {
        id:2,
        text:"About"
    },
    {
        id:3,
        text:"Portfolio"
    },
    {
        id:4,
        text:"Experience"
    },
    {
        id:5,
        text:"Contact"
    },
  ]
  return (
    <>
      <div className="max-w-screen-2xl  container mx-auto px-4 mx:px-20 h-16 shadow-md fixed top-0 right-0 z-50 left-0 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} alt="logo" className="h-12 w-12 rounded-full" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Mauli<span className="text-green-500 text-2xl">k</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className="md:flex space-x-8 hidden">
            {
                navItems.map(({id,text})=>{
                    return(
                        <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                        <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">{text}</Link>
                        </li>
                    )
                })
              }
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <AiOutlineMenu size={24} /> : <RxCross1 size={24} />}
            </div>
          </div>
        </div>
        {/* mobile nav */}
        {!menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col items-center justify-center h-screen space-y-3 text-xl">
            {
                navItems.map(({id,text})=>{
                    return(
                        <li className="hover:scale-105 font-semibold duration-200 cursor-pointer" key={id}> <Link to={text} onClick={() => setMenu(!menu)} smooth={true} duration={500} offset={-70} activeClass="active">{text}</Link></li>
                    )
                })
              }
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
