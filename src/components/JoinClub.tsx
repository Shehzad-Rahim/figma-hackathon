import React from 'react';

function JoinClub() {
  return (
    <div className="bg-[#f9f9f9] md:px-20 sm:px-10 pt-10 pb-20">
      <div className="flex justify-center bg-white pt-20 pb-12">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="text-4xl leading-[50.4px] text-center">
            Join the club and get the benefits
          </h1>
          <p className="w-full max-w-[470px] text-center">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="mt-14 flex items-center sm:items-start">
            <input
              className="outline-none bg-[#f9f9f9] py-3 px-6  sm:w-[354px] w-[224px]"
              type="text"
              placeholder="your@email.com"
            />
            <button className="bg-[#2a254b] text-white py-3 px-6 w-[118px]">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinClub;
