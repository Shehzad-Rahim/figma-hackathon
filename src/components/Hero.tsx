import Image from "next/image";
import Link from "next/link";
import chair from "../../public/Hero/Right Image.png";

function Hero() {
  return (
    <div className="flex flex-col md:items-center lg:flex-row text-white max-w-[1280px] my-10 sm:px-5 lg:px-20">
      {/* Left Section */}
      <div className="flex flex-col lg:w-[760px] md:w-[80%] lg:h-[584px] sm:h-[420px] justify-between bg-[#2a254b] px-6 lg:px-10 py-10 lg:py-16 gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="sm:text-2xl lg:text-[32px] text-[32px] font-bold leading-tight lg:w-[513px]">
            The furniture brand for the future, with timeless designs
          </h1>
         <div className="flex  sm:flex-col flex-col-reverse lg:gap-52 sm:gap-32 gap-10">
         <Link
            className="py-4 text-center  bg-[#f9f9f9] bg-opacity-[15%] sm:w-[170px] w-full hover:bg-opacity-30 transition"
            href="/productsListing"
          >
            View Collection
          </Link>y
        <p className="md:text-sm text-lg lg:text-lg lg:pr-10 leading-relaxed">
          A new era in eco-friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors, and a beautiful way to
          display things digitally using modern web technologies.
        </p>
         </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-[520px] lg:h-[584px] md:w-[80%] md:h-[550px] hidden  sm:flex justify-center">
        <Image
          className="sm:w-full h-auto"
          src={chair}
          alt="chair"
        />
      </div>
    </div>
  );
}

export default Hero;
