'use client'
import { useState } from "react";
import { products } from '../../productsdata/data';
import Image from 'next/image';
import Link from 'next/link';
import HomeIntro from '@/components/HomeIntro';
import JoinClub from '@/components/JoinClub';
import NewCaramics from "@/components/NewCaramics";

const ProductsListing = ({ params }: { params: { slug: string } }) => {
  const product = products.find((product) => product.slug === params.slug);
  const [count, setState] = useState(1);

  if (!product) {
    return (
      <div className='h-[70vh] flex flex-col items-center justify-center'>
        <p className='text-center text-3xl underline'>Product not found</p>
        <Link className='py-4 px-8 my-10 bg-[#2a254b] text-white' href={'/'}>
          Go To Homepage
        </Link>
      </div>
    );
  }

  const increase = () => {
    if (count < 100) {
      setState(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setState(count - 1);
    }
  };

  return (
    <>
      <div className='flex flex-col sm:flex-row lg:gap-4 lg:p-20 sm:px-4'>
        {/* Product Image Section */}
        <div className='w-full lg:w-1/2'>
          {product.content.map((content, index) => {
            if (content.type === 'mainImage') {
              return (
                <Image
                  key={index}
                  className='w-full h-auto object-cover max-w-[721px] lg:max-h-[759px] sm:min-h-[559px] sm:min-w-[521px]'
                  src={content.value}
                  alt='Product Image'
                  width={500}
                  height={500}
                />
              );
            }
            return null;
          })}
        </div>

        {/* Product Details Section */}
        <div className='flex flex-col justify-center gap-3 px-6 py-5 lg:p-20 w-full lg:w-1/2'>
          {product.content.map((content, index) => {
            switch (content.type) {
              case 'heading':
                return <h2 className='text-4xl font-semibold' key={index}>{content.value}</h2>;
              case 'price':
                return <p className='font-semibold text-2xl' key={index}>{content.value}</p>;
              case 'paragraph':
              case 'desc':
                return <p className='text-base sm:text-sm' key={index}>{content.value}</p>;
              case 'list':
                return (
                  <ul className='mt-2 list-disc list-inside' key={index}>
                    <li className='text-sm'>{content.value}</li>
                  </ul>
                );
              default:
                return null;
            }
          })}

          {/* Dimensions Section */}
          <div className='mt-10'>
            <p className='text-lg font-medium'>Dimensions</p>
            <div className='grid grid-cols-3 gap-4 mt-4 text-center '>
              <div className="flex gap-8 py-2 justify-between sm:w-[200px] w-[80%]">
                <p className='text-sm font-semibold'>Height</p>
                <p className='text-sm font-semibold'>Width</p>
                <p className='text-sm font-semibold'>Depth</p>
              </div>
              <div className="flex py-2 justify-between sm:w-[200px] w-[80%]">
                <p className='text-sm'>110cm</p>
                <p className='text-sm'>75cm</p>
                <p className='text-sm'>50cm</p>
              </div>
              
            </div>
          </div>

          {/* Amount and Add to Cart */}
          <div className='flex flex-col sm:flex-row justify-between items-center mt-6 gap-4'>
            <div className='flex items-center gap-4'>
              <p className='text-sm sm:block hidden'>Amount:</p>
              <div className='flex items-center border border-gray-300'>
                <button onClick={decrease} className='px-3 py-2 bg-gray-100'>-</button>
                <p className='px-4 py-2'>{count}</p>
                <button onClick={increase} className='px-3 py-2 bg-gray-100'>+</button>
              </div>
            </div>
            <button className='py-3 px-6 bg-[#2a254b] text-white sm:w-auto w-full'>Add to cart</button>
          </div>
        </div>
      </div>

      <NewCaramics />
      <HomeIntro />
      <JoinClub />
    </>
  );
};

export default ProductsListing;
