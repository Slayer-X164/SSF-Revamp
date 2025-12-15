import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link } from "@tanstack/react-router";
import {
  HiOutlineCash,
  HiOutlineDocumentText,
  HiOutlinePhotograph,
  HiOutlinePhone,
  HiOutlineClipboardList,
} from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(false);

  const closeAll = () => {
    setOpen(false);
    setValue(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-20 flex justify-center bg-white/60 backdrop-blur-lg border-b-2 border-neutral-200">
      <div className="w-6xl flex items-center justify-between h-20 px-4 xl:px-0">
        {/* Logo */}
        <Link to="/" onClick={closeAll}>
          <img src="logo.svg" alt="logo" className="w-12" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden relative md:flex items-center  lg:gap-10 text-lg uppercase font-semibold">
          <li>
            <Link to="/" className="hover:bg-gray-300 px-2 rounded">
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/"
              hash="about"
              className="hover:bg-gray-300 px-2 rounded"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/"
              hash="join-us"
              className="hover:bg-gray-300 px-2 rounded"
            >
              Join Us
            </Link>
          </li>

          <li>
            <Link to="/Campaign" className="hover:bg-gray-300 px-2 rounded">
              Campaign
            </Link>
          </li>

          <li
            onClick={() => setValue(!value)}
            className="flex items-center gap-1 cursor-pointer hover:bg-gray-300 px-2 rounded"
          >
            More <IoIosArrowDown />
          </li>

          {/* Dropdown */}
          {value && (
            <div className="absolute top-12 right-0 w-64 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden">
              <ul className="divide-y divide-gray-200 text-sm font-semibold uppercase">
                <Link
                  to="/DonateAndSupport"
                  onClick={closeAll}
                  className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition"
                >
                  <HiOutlineCash className="text-xl text-gray-700" />
                  Donate & Support
                </Link>

                <Link
                  to="/Blog"
                  onClick={closeAll}
                  className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition"
                >
                  <HiOutlineDocumentText className="text-xl text-gray-700" />
                  Blog
                </Link>

                <Link
                  to="/Media"
                  onClick={closeAll}
                  className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition"
                >
                  <HiOutlinePhotograph className="text-xl text-gray-700" />
                  Media Gallery
                </Link>

                <Link
                  to="/Contact"
                  onClick={closeAll}
                  className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition"
                >
                  <HiOutlinePhone className="text-xl text-gray-700" />
                  Contact Us
                </Link>

                <Link
                  to="/TermsAndCondition"
                  onClick={closeAll}
                  className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition"
                >
                  <HiOutlineClipboardList className="text-xl text-gray-700" />
                  Terms & Conditions
                </Link>
              </ul>
            </div>
          )}
        </ul>
        {/* buttons */}
        <div className="  gap-4 items-center justify-center hidden md:flex">
          <a
            href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
            target="_blank"
          >
            <button className="px-6 w-full py-2 bg-[#005EFF] text-white hover:bg-black font-medium text-lg relative group transition-all duration-200 ease-in cursor-pointer">
              Donate
              <span className="absolute group-hover:translate-x-0 group-hover:translate-y-0 inset-0 bg-black translate-x-1.5 translate-y-1.5 -z-1 transition-all duration-200 ease-in"></span>
            </button>
          </a>
          <Link to="/Volunteer" onClick={closeAll}>
            <button className="hidden md:inline-block px-5 py-2 border-2 border-yellow-400 hover:border-transparent bg-white text-zinc-900 hover:text-yellow-300 hover:bg-black font-semibold text-lg relative group transition-all duration-200 ease-in cursor-pointer">

                Apply
                <span className="absolute inset-0 bg-white border-2 border-black translate-x-1.5 translate-y-1.5 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 ease-in"></span>
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-white shadow-xl transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-3 p-6 text-lg uppercase font-semibold">
          <Link to="/" onClick={closeAll}>
            Home
          </Link>
          <Link to="/" hash="about" onClick={closeAll}>
            About Us
          </Link>
          <Link to="/Campaign" onClick={closeAll}>
            Campaign
          </Link>
          <Link to="/" hash="join-us" onClick={closeAll}>
            Join Us
          </Link>

          <li
            onClick={() => setValue(!value)}
            className="flex items-center gap-1 cursor-pointer"
          >
            More
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                value ? "rotate-180" : "rotate-0"
              }`}
            />
          </li>

          {value && (
            <>
              <Link
                to="/DonateAndSupport"
                onClick={closeAll}
                className="px-4 py-2 text-sm bg-blue-100"
              >
                Donate & Support
              </Link>
              <Link
                to="/Blog"
                onClick={closeAll}
                className="px-4 py-2 text-sm bg-blue-100"
              >
                Blog
              </Link>
              <Link
                to="/Media"
                onClick={closeAll}
                className="px-4 py-2 text-sm bg-blue-100"
              >
                Media Gallery
              </Link>
              <Link
                to="/Contact"
                onClick={closeAll}
                className="px-4 py-2 text-sm bg-blue-100"
              >
                Contact Us
              </Link>
              <Link
                to="/TermsAndCondition"
                onClick={closeAll}
                className="px-4 py-2 text-sm bg-blue-100"
              >
                Terms & Conditions
              </Link>
            </>
          )}
          <div className="pt-4 flex flex-col gap-3 w-full">
            <a
              href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
              target="_blank"
            >
              <button className="px-4 w-full py-2 bg-[#005EFF] text-white hover:bg-black font-medium text-lg relative group transition-all duration-200 ease-in cursor-pointer">
                Donate Now
                <span className="absolute group-hover:translate-x-0 group-hover:translate-y-0 inset-0 bg-black translate-x-1.5 translate-y-1.5 -z-1 transition-all duration-200 ease-in"></span>
              </button>
            </a>
            <Link to="/Volunteer" onClick={closeAll}>
            <button className="w-full inline-block px-5 py-2 border-2 border-yellow-400 hover:border-transparent bg-white text-zinc-900 hover:text-yellow-300 hover:bg-black font-semibold text-lg relative group transition-all duration-200 ease-in cursor-pointer">

                Apply
                <span className="absolute inset-0 bg-white border-2 border-black translate-x-1.5 translate-y-1.5 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 ease-in"></span>
            </button>
          </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
