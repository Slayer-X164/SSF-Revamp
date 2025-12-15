import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "@tanstack/react-router";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="relative w-full min-h-screen px-4 py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto lg:px-6 px-4 py-12 bg-black text-white shadow-[6px_6px_0px_gray]">
        {/* Main Footer Content */}
        <div className="w-full min-h-52">
          <div className="flex items-start justify-between gap-12 flex-col lg:flex-row mb-4">
            {/* Logo and Description */}
            <div className="lg:h-48 flex justify-between flex-col gap-10">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <img src="./images/logo.png" alt="" />
                  <h2 className="text-xl font-semibold">
                    Swastik Srijan Foundation
                  </h2>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                  Creating sustainable change through education, health, women
                  empowerment Together, we can build a better tomorrow.
                </p>
              </div>
              <a
                href="mailto:swastiksrijanfoundation@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <img
                  src="./images/mail_icon.png"
                  alt="mail image"
                  className="w-8"
                />
                swastiksrijanfoundation@gmail.com
              </a>
            </div>

            {/* Quick Links */}
            <div className="w-full lg:w-fit">
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
  <li>
    <Link
      to="/"
      className="text-gray-300 hover:text-white transition-colors text-sm"
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      to="/"
      hash="about"
      className="text-gray-300 hover:text-white transition-colors text-sm"
    >
      About Us
    </Link>
  </li>

  <li>
    <Link
      to="/Campaign"
      className="text-gray-300 hover:text-white transition-colors text-sm"
    >
      Campaign
    </Link>
  </li>

  <li>
    <Link
      to="/"
      hash="join-us"
      className="text-gray-300 hover:text-white transition-colors text-sm"
    >
      Join Us
    </Link>
  </li>

  <li>
    <Link
      to="/DonateAndSupport"
      className="text-gray-300 hover:text-white transition-colors text-sm"
    >
      Donate
    </Link>
  </li>
</ul>
            </div>

            {/* Contact */}
            <div className="w-full lg:w-fit">
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <img
                    src="./images/location.png"
                    alt="location icon"
                    className="text-gray-300 mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="text-gray-300 text-sm flex flex-col">
                      <span>Rewa Madhya </span>
                      <span>Pradesh, India</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img
                    src="./images/phone.png"
                    alt="phone icon"
                    size={20}
                    className="text-gray-300 mt-1 flex-shrink-0"
                  />
                  <div className="space-y-1">
                    <p className="text-gray-300 text-sm">+91 9424626518</p>
                    <p className="text-gray-300 text-sm">+91 9718346691</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-2 text-xl ">
  <a
    href="https://www.facebook.com/share/17P7Na1y8X/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="text-gray-300 hover:text-white transition-colors"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.instagram.com/swastiksrijan?igsh=bGE5N3diOXkzYnNr"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="text-gray-300 hover:text-white transition-colors"
  >
    <FaInstagram />
  </a>

  <a
    href="https://x.com/SSF_India2013"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X (Twitter)"
    className="text-gray-300 hover:text-white transition-colors"
  >
    <FaXTwitter />
  </a>

  <a
    href="https://youtube.com/@swastiksrijanofficial?si=TtzvHm3l_-vO02NX"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    className="text-gray-300 hover:text-white transition-colors"
  >
    <FaYoutube />
  </a>

  <a
    href="https://www.linkedin.com/in/swastik-srijan-foundation-440388247"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="text-gray-300 hover:text-white transition-colors "
  >
    <FaLinkedinIn />
  </a>
</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Swastik Srijan Foundation. All rights reserved.
            </p>
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <div className="w-full min-h-36 md:min-h-76 overflow-hidden flex items-center justify-center">
        <img className="absolute md:-bottom-10 -bottom-2" src="./images/SSF.png" alt="" />
      </div>
    </footer>
  );
}
