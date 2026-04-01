import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = ({ carts, setActiveTab }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
          DigiTools
        </h1>

        <ul className="hidden md:flex items-center gap-8">
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

        <div className="flex items-center gap-4">
          <div
            onClick={() => setActiveTab("cart")}
            className="relative cursor-pointer"
          >
            <BsCart2 className="text-lg hover:text-[#4f39f6]" />

            {carts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#9514fa] text-white text-xs px-2 py-0.5 rounded-full">
                {carts.length}
              </span>
            )}
          </div>

          <button className="hidden md:block hover:text-[#4f39f6] cursor-pointer">
            Login
          </button>

          <button className="hidden md:block px-6 py-2 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white cursor-pointer">
            Get Started
          </button>

          {/* Mobile Responsive For Hamburger */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
