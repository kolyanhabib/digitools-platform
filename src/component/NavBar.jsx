import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = ({ carts, setActiveTab }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
          DigiTools
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-sm xl:text-base">
          <li>
            <a href="#" className="hover:text-[#4f39f6]">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#4f39f6]">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#4f39f6]">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#4f39f6]">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#4f39f6]">
              FAQ
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Cart */}
          <div
            onClick={() => {
              setActiveTab("cart");
              setOpen(false);
            }}
            className="relative cursor-pointer"
          >
            <BsCart2 className="text-lg font-medium sm:text-xl hover:text-[#4f39f6]" />

            {carts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#9514fa] text-white text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full">
                {carts.length}
              </span>
            )}
          </div>

          {/* Desktop Buttons */}
          <button className="hidden lg:block text-base font-semibold hover:text-[#4f39f6]">
            Login
          </button>

          <button className="hidden lg:block px-4 xl:px-6 py-1.5 xl:py-2 text-sm xl:text-base rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">
            Get Started
          </button>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Right Drawer Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 sm:w-72 bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h1 className="text-lg font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
            DigiTools
          </h1>

          <button
            onClick={() => setOpen(false)}
            className="text-2xl cursor-pointer"
          >
            <HiX />
          </button>
        </div>

        {/* Menu */}
        <ul className="flex flex-col gap-5 p-5 text-sm font-medium">
          <li>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="hover:text-[#4f39f6] cursor-pointer"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="hover:text-[#4f39f6] cursor-pointer"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="hover:text-[#4f39f6] cursor-pointer"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="hover:text-[#4f39f6] cursor-pointer"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="hover:text-[#4f39f6] cursor-pointer"
            >
              FAQ
            </a>
          </li>

          <button
            onClick={() => setOpen(false)}
            className="text-left mt-2 hover:text-[#4f39f6]"
          >
            Login
          </button>

          <button
            onClick={() => setOpen(false)}
            className="w-full py-2 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"
          >
            Get Started
          </button>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
