import Link from "next/link";
import { FaLinkedin, FaSkype } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="px-5 md:px-20 xl:px-28 bg-[#2a254b] text-white">
      {/* Top Section */}
      <div className="py-10 flex flex-wrap justify-between border-b border-[#4e4d93] gap-8 md:gap-0">
        {/* Menu */}
        <ul className="flex flex-col gap-3">
          <li className="font-bold">Menu</li>
          <li>
            <Link className="text-sm" href="">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link className="text-sm" href="">
              Best sellers
            </Link>
          </li>
          <li>
            <Link className="text-sm" href="">
              Recently viewed
            </Link>
          </li>
          <li>
            <Link className="text-sm" href="">
              Popular this week
            </Link>
          </li>
          <li>
            <Link className="text-sm" href="">
              All products
            </Link>
          </li>
        </ul>

        {/* Categories */}
        <ul className="flex flex-col gap-3">
          <li className="font-bold">Categories</li>
          <li>
            <Link className="text-sm" href="">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link className="text-sm" href="">
              Best sellers
            </Link>
          </li>
          <li>
            <Link className="text-sm" href="">
              Recently viewed
            </Link>
          </li>
          <li>
            <Link className="text-sm" href="">
              Popular this week
            </Link>
          </li>
          <li>
            <Link className="text-sm" href="">
              All products
            </Link>
          </li>
        </ul>

        {/* Our Company */}
        <ul className="flex flex-col gap-3">
          <li className="font-bold">Our Company</li>
          <li>
            <Link className="text-sm" href="">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link className="text-sm" href="">
              Best sellers
            </Link>
          </li>
          <li>
            <Link className="text-sm" href="">
              Recently viewed
            </Link>
          </li>
          <li>
            <Link className="text-sm" href="">
              Popular this week
            </Link>
          </li>
          <li>
            <Link className="text-sm" href="">
              All products
            </Link>
          </li>
        </ul>

        {/* Mailing List */}
        <div className="flex flex-col gap-4">
          <p className="font-bold">Join our mailing list</p>
          <div className="flex">
            <input
              className="flex-1 h-[56px] px-4 outline-none text-white bg-[#ffffff] bg-opacity-[15%] placeholder-gray-400"
              type="email"
              placeholder="your@email.com"
            />
            <button className="text-[#2a254b] bg-white h-[56px] px-6">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-8 gap-4 sm:gap-0">
        <p className="text-sm text-center sm:text-left">
          Copyright 2024 Avion LTD
        </p>
        <div className="sm:flex hidden gap-6">
          <Link className="text-xl text-white" href="">
            <FaLinkedin />
          </Link>
          <Link className="text-xl text-white" href="">
            <FaFacebookSquare />
          </Link>
          <Link className="text-xl text-white" href="">
            <FaInstagram />
          </Link>
          <Link className="text-xl text-white" href="">
            <FaSkype />
          </Link>
          <Link className="text-xl text-white" href="">
            <FaTwitter />
          </Link>
          <Link className="text-xl text-white" href="">
            <FaPinterestP />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
