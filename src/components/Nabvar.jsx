import React, { useState } from "react";

import { Nabmenu } from "../mockData/data";
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import ResponsiveMenu from "./ResponsiveMenu";
const Nabvar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="container mx-auto  ">
          <div className="flex justify-between items-center py-5">
            {/* logo */}
            <div className="flex items-center text-2xl gap-2 font-bold py-5">
              <FaDumbbell />
              <p>Gravity</p>
              <p className="text-secondary">Gym</p>
            </div>
            {/* menu */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 text-gray-600">
                {Nabmenu.map((item) => (
                  <li key={item.id}>
                    <a
                      className="inline-block py-1 px-3 hover:text-primary hover:font-semibold"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* icon  */}
            <div className="flex items-center gap-4">
              <div className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
                <CiSearch />
              </div>
              <div className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
                <LuShoppingBag />
              </div>
              <button className="hover:bg-primary hover:text-white text-primary font-semibold rounded-md border-2 border-primary py-1.5 px-6 duration-200  hidden md:block">
                Login
              </button>
            </div>
            {/* mobile  menu */}
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <IoMenu className="text-4xl cursor-pointer " />
            </div>
          </div>
        </div>
      </nav>
      {/* mobile menu slider */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Nabvar;
