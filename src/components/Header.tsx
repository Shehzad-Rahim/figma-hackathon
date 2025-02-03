'use client'
import {
  Search,
  ShoppingCart,
  X,
  AlignRight,
} from 'lucide-react';
import { useState , useContext } from 'react';
import Link from 'next/link';
import CategoriesNav from './CategoriesNav';
import UserLogo from './UserLogo';
import { CartContext } from '@/context/CartContext';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartContext = useContext(CartContext);
  if(!cartContext){
    return null
  }
  const { cartQuantity } = cartContext;
  return (
    <div className="sm:pt-5 pt-5">
      {/* Top Header Section */}
      <div className="flex justify-between items-center sm:px-10 px-5 border-b pb-5 bg-white">
        <div className="flex sm:flex-row-reverse justify-between items-center sm:w-1/2 w-full sm:mr-0 mr-[10px]">
      <Link href={'/'}>
          <h1 className="text-2xl leading-[29.52px]">Avion</h1>
        </Link>
        <Search className="w-6 h-6" />
        </div>
        <div className="flex gap-5 items-center">
        
            <div className="flex items-center gap-5">
            <div className="relative">
            <Link  href={'/cart'}>
            <ShoppingCart className="w-6 h-6" />
            {cartQuantity > 0 && (
            <span className="absolute -top-[6px] -right-[6px] bg-red-500 text-white text-xs w-[18px] h-[18px] flex items-center justify-center rounded-full">
            {cartQuantity}
            </span>
            )}
            </Link>
          </div>
             <UserLogo/>
          </div>
          {/* Menu Button for Small Screens */}
          <button
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <AlignRight className="w-6 h-6" />}
          </button>
          {/* Cart and User Icons */}
         
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
