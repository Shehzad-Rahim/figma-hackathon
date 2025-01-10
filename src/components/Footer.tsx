import Link from "next/link";
import { FaLinkedin, FaSkype } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

function Footer() {
  const social =[
    {icon: <FaLinkedin/> , href: ""},
    {icon: <FaFacebookSquare/> , href: ""},
    {icon: <FaInstagram/> , href: ""},
    {icon: <FaSkype/> , href: ""},
    {icon: <FaTwitter/> , href: ""},
    {icon: <FaPinterestP/> , href: ""},
  ]
  return (
    <div className="px-5 md:px-20 xl:px-28 bg-[#2a254b] text-white">
      {/* Top Section */}
      <div className="py-10 flex flex-wrap justify-between border-b border-[#4e4d93] gap-8 md:gap-0">
        {/* Menu */}
        <div>
          <h3 className="font-bold mb-3">Menu</h3>
          <FooterUl />
        </div>

        {/* Categories */}
        
        <div>
          <h3 className="font-bold mb-3">Categories</h3>
          <FooterUl />
        </div>
        

        {/* Our Company */}
        <div>
          <h3 className="font-bold mb-3">Our Company</h3>
          <FooterUl />
        </div>

        {/* Mailing List */}
        <div className="flex flex-col gap-4">
          <p className="font-bold">Join our mailing list</p>
          <div className="flex">
            <input
              className="flex-1 h-[56px] px-4 outline-none text-white bg-[#ffffff] bg-opacity-[15%] placeholder-gray-400"
              type="email"
              placeholder="your@email.com"
            />
            <button className="text-[#2a254b] bg-white h-[56px] sm:px-6 px-4">
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
        <ul className="sm:flex hidden gap-6">
          {social.map((icons , i) => (
            <li key={i}>
              <Link className="text-xl text-white" href="">
            {icons.icon}
          </Link>
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default Footer;

export function FooterUl(){
  const listItems :{item:string}[] = [
    {item : "New Arrivals"},
    {item : "Best Sellers"},
    {item : "Recently Viewed"},
    {item : "Popular This Week"},
    {item : "All Products"},
  ]
  return(
    <div>
      <ul className="flex flex-col gap-3">
        {listItems.map((item , i) => (
          <li key={i}>
            <Link className="text-sm" href="">{item.item}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}