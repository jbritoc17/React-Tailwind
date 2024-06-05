import React, { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="text-slate-500 transition-colors focus:ring-2 focus:ring-slate-200 rounded hover:bg-sky-500 hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute -right-28 mt-2 w-48 border-[2px] bg-[#f9f9f9]  border-sky-900 rounded-md shadow-lg z-50 ">
          <div className="py-1 ">
            <a
              href="/category/jewelery"
            className="block px-4 py-2 rounded-md text-slate-600 hover:bg-[#0ea4e9] hover:text-[#f9f9f9]"
            >
              Jewelery
            </a>
            <a
              href="/category/electronics"
              className="block px-4 py-2 text-slate-600 rounded-md hover:bg-[#0ea4e9] hover:text-[#f9f9f9]"
            >
              Electronics
            </a>
            <div className="relative group">
              <a
                href="#"
                className="group overflow-hidden rounded-md block px-4 py-2 text-slate-600  hover:bg-[#0ea4e9] hover:text-[#f9f9f9]"
              >
                Clothes
              </a>
              <div className="hidden group-hover:block absolute text-center group-hover:m-auto rounded-md m-0 p-0 bg-slate-100 w-[50%] right-1 border-sky-900 border ">
                <a className="block p-0 rounded-md text-slate-600 hover:bg-[#0ea4e9] hover:text-[#f9f9f9]" 
                href="/category/man_clothes">
                  Man
                </a>
                <a className="block p-0  rounded-md  text-slate-600 hover:bg-[#0ea4e9] hover:text-[#f9f9f9]" href="/category/women_clothes">
                  Women
                  </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
