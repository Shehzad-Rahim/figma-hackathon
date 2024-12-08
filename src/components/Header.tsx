'use client'
import { useState } from 'react';
import {
  Search,
  ShoppingCart,
  CircleUserRound,
  Menu,
  X,
} from 'lucide-react';
import Link from 'next/link';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="py-5">
      {/* Top Header Section */}
      <div className="flex justify-between items-center sm:px-10 px-5 border-b pb-5">
        <Search className="w-4 h-4" />
        <Link href={'/'}>
          <h1 className="text-2xl leading-[29.52px]">Avion</h1>
        </Link>
        <div className="flex gap-4 items-center">
          {/* Menu Button for Small Screens */}
          <button
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
      <ul
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } sm:flex flex-col sm:flex-row justify-center gap-4 sm:gap-11 my-5 px-5`}
      >
        <li className='border-b pb-3'>
          <Link href={'/'}>Plant pots</Link>
        </li>
        <li className='border-b pb-3'>
          <Link href={'/'}>Caramics</Link>
        </li>
        <li className='border-b pb-3'>
          <Link href={'/'}>Tables</Link>
        </li>
        <li className='border-b pb-3'>
          <Link href={'/'}>Chairs</Link>
        </li>
        <li className='border-b pb-3'>
          <Link href={'/'}>Crockery</Link>
        </li>
        <li className='border-b pb-3'>
          <Link href={'/'}>Tableware</Link>
        </li>
        <li className='border-b pb-3'>
          <Link href={'/'}>Cutlery</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
