'use client';
import { useState } from 'react';
import { products } from '../../productsdata/data';
import Image from 'next/image';
import Link from 'next/link';
import HomeIntro from '@/components/HomeIntro';
import JoinClub from '@/components/JoinClub';

const ProductsListing = ({ params }: { params: { slug: string } }) => {
  const product = products.find((product) => product.slug === params.slug);
  const [count, setState] = useState(1);

  if (!product) {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-between">
        <p className="text-center mt-20 text-3xl underline">Product not found</p>
        <Link
          className="py-4 px-8 my-10 bg-[#2a254b] text-white"
          href={'/'}
        >
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
      <div className="flex flex-col md:flex-row gap-6 md:gap-4">
        {/* Product Image */}
        <div className="md:w-1/2 w-full">
          {product.content.map((content) => {
            switch (content.type) {
              case 'mainImage':
                return (
                  <Image
                    className="w-full md:w-[721px] md:h-[759px]"
                    src={content.value}
                    alt="blog image"
                    width={500}
                    height={0}
                  />
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-5 p-6 md:p-20 md:w-1/2 w-full">
          {product.content.map((content, index) => {
            switch (content.type) {
              case 'heading':
                return (
                  <h2 className="text-2xl md:text-4xl" key={index}>
                    {content.value}
                  </h2>
                );
              case 'price':
                return (
                  <p className="font-semibold text-xl md:text-2xl">
                    {content.value}
                  </p>
                );
              case 'paragraph':
              case 'desc':
                return (
                  <p
                    className="text-[14px] md:sm:text-[16px]"
                    key={index}
                  >
                    {content.value}
                  </p>
                );
              case 'list':
                return (
                  <ul className="mt-2 -mb-6">
                    <li
                      className="list-disc list-inside ml-4 text-[14px] md:text-[16px]"
                      key={index}
                    >
                      {content.value}
                    </li>
                  </ul>
                );
              default:
                return null;
            }
          })}

          {/* Dimensions Section */}
          <div className="mt-14">
            <p>Dimensions</p>
            <div className="grid grid-cols-3 gap-4 my-4 text-center md:text-left">
              <p>Height</p>
              <p>Width</p>
              <p>Depth</p>
              <p>110cm</p>
              <p>75cm</p>
              <p>50cm</p>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col lg:flex-row justify-between gap-4 items-center">
            <div className="flex sm:gap-5 gap-40 items-center">
              <p className=''>Amount:</p>
              <div className="flex">
                <button
                  type="button"
                  onClick={decrease}
                  className="bg-[#f9f9f9] py-2 px-4"
                >
                  -
                </button>
                <button className="bg-[#f9f9f9] py-2 px-4">
                  {count}
                </button>
                <button
                  type="button"
                  onClick={increase}
                  className="bg-[#f9f9f9] py-2 px-4"
                >
                  +
                </button>
              </div>
            </div>
            <button className=" sm:w-[143px] h-[56px] w-full bg-[#2a254b] text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <HomeIntro />
      <JoinClub />
    </>
  );
};

export default ProductsListing;
