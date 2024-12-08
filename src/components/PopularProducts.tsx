import Link from "next/link";
import ProductsProp from "./ProductsProp";
import p1 from "../../public/popular products/1.png";
import p2 from "../../public/New Caramics/1.png";
import p3 from "../../public/popular products/2.png";

function PopularProducts() {
  return (
    <div className="flex flex-col gap-10 my-10 mx-5 md:mx-20">
      <h1 className="text-[32px] leading-[39.36px] text-center md:text-left">
        Our Popular Products
      </h1>
      <div className="flex flex-wrap justify-center md:justify-start gap-6">
        <ProductsProp
          image={p1}
          P_alt="suede sofa"
          title="The Popular suede sofa"
          price={980}
         
        />
        <ProductsProp
          image={p2}
          P_alt="The Dandy Chair"
          title="The Dandy Chair"
          price={250}
         
        />
        <ProductsProp
          image={p3}
          P_alt="The Dandy Chair"
          title="The Dandy Chair"
          price={250}
          
        />
      </div>
      <Link
        className="flex justify-center items-center mx-auto sm:w-[170px] w-full h-[56px] bg-[#f9f9f9]"
        href={""}
      >
        View Collection
      </Link>
    </div>
  );
}

export default PopularProducts;
