'use client'
import { useState } from 'react';
import {
  Search,
  ShoppingCart,
  CircleUserRound,
  X,
  AlignRight,
} from 'lucide-react';
import Link from 'next/link';
import CategoriesNav from './CategoriesNav';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const navLinks = [
  //   {title : "Plant pots", href : "/category/plant-pots" },
  //   {title : "Caramics", href : "/category/ceramics" },
  //   {title : "Tables", href : "tables" },
  //   {title : "Chairs", href : "chairs" },
  //   {title : "Crockory", href : "crockory" },
  //   {title : "Tableware", href : "tableware" },
  //   {title : "Cutlery", href : "cutlery" },
  // ]
  return (
    <div className="sm:pt-5 pt-5">
      {/* Top Header Section */}
      <div className="flex justify-between items-center sm:px-10 px-5 border-b pb-5 bg-white">
      <Link className='sm:hidden block' href={'/'}>
          <h1 className="text-2xl leading-[29.52px]">Avion</h1>
        </Link>
        <Search className="w-4 h-4 sm:block hidden" />
        <Link className='sm:block hidden' href={'/'}>
          <h1 className="text-2xl leading-[29.52px]">Avion</h1>
        </Link>
        <div className="flex gap-4 items-center">
        <Search className="w-4 h-4 sm:hidden block" />
          <Link className='sm:hidden' href={'/shoppingbasket'}>
              <ShoppingCart className="w-4 h-4" />
            </Link>
          {/* Menu Button for Small Screens */}
          <button
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <AlignRight className="w-6 h-6" />}
          </button>
          {/* Cart and User Icons */}
          <div className="hidden sm:flex gap-4">
            <Link href={'/shoppingbasket'}>
              <ShoppingCart className="w-4 h-4" />
            </Link>
            <CircleUserRound className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } sm:flex flex-col sm:flex-row justify-center sm:relative absolute sm:w-auto w-full `}
      >
        <CategoriesNav />
      </div>
    </div>
  );
}

export default Header;
