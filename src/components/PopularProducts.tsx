import Link from "next/link";
import Image from "next/image";
import p1 from "../../public/popular products/1.png";
import p2 from "../../public/New Caramics/1.png";
import p3 from "../../public/popular products/2.png";

function PopularProducts() {
  return (
    <div className="flex flex-col gap-10 my-10 mx-5 md:mx-20">
      <h1 className="text-[32px] leading-[39.36px] text-center xl:text-left">
        Our Popular Products
      </h1>
      <div className="overflow-x-scroll scroll-p-4 scroll-smooth scroll-m-2 sm:overflow-hidden">
      <div className="flex xl:flex-nowrap sm:flex-wrap w-[1100px] sm:w-auto sm:justify-center xl:justify-start gap-6">
        
        <div className="flex flex-col sm:gap-4 gap-1">
        <Image className="md:w-[633px] sm:w-[520px] w-[400px] xl:h-[462px] md:h-[420px] sm:h-[335px] h-[300px]" src={p1} alt="sofa"></Image>
        <h2 className="sm:text-xl  text-center lg:text-left">Sofa Suede</h2>
        <p className="sm:text-lg text-center lg:text-left">$1200</p>
        </div>
        <div className="flex flex-col sm:gap-4 gap-1">
        <Image className="sm:w-[305px] w-[300px] xl:h-[462px] md:h-[420px] sm:h-[335px] h-[300px]" src={p2} alt="sofa"></Image>
        <h2 className="sm:text-xl  text-center lg:text-left">The Dandy Chair</h2>
        <p className="sm:text-lg text-center lg:text-left">$250</p>
        </div>
        <div className="flex flex-col sm:gap-4 gap-1">
        <Image className="sm:w-[305px] w-[300px] xl:h-[462px] md:h-[420px] sm:h-[335px] h-[300px]" src={p3} alt="sofa"></Image>
        <h2 className="sm:text-xl  text-center lg:text-left">The Classic Grey</h2>
        <p className="sm:text-lg text-center lg:text-left">$300</p>
        </div>

       
      </div>
      </div>
      <Link
        className="flex justify-center items-center mx-auto sm:w-[170px] w-full h-[56px] bg-[#f9f9f9]"
        href={"/productsListing"}
      >
        View Collection
      </Link>
    </div>
  );
}

export default PopularProducts;
