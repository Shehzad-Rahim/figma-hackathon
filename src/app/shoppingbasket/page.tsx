import Image from "next/image";
import C1 from "../../../public/images/cart1.png";
import C2 from "../../../public/images/cart2.png";

function page() {
  return (
    <div className="bg-[#f9f9f9] px-4 py-10 md:px-20 lg:px-28">
      <h1 className="text-2xl md:text-4xl mb-6">Your shopping cart</h1>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between py-2 border-b">
        <p className="text-sm">Product</p>
        <div className="flex gap-10">
          <p className="text-sm">Quantity</p>
          <p className="text-sm">Total</p>
        </div>
      </div>

      {/* Product 1 */}
      <div className="flex flex-wrap justify-between my-5 gap-6">
        <div className="flex gap-4 items-center">
          <Image
            className="w-[133px] h-[166px] md:w-[109px] md:h-[134px]"
            src={C1}
            alt="greystone vase"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-lg md:text-xl">Greystone vase</h2>
            <p className="text-sm md:text-base w-[200px]">
              A timeless ceramic vase with a tri-color grey glaze.
            </p>
            <p className="text-sm md:text-base">$125</p>
          </div>
        </div>
        <div className="flex gap-10 md:gap-[450px] items-center">
          <p className="text-sm md:text-base">1</p>
          <p className="text-sm md:text-base">$125</p>
        </div>
      </div>

      {/* Product 2 */}
      <div className="flex flex-wrap justify-between my-5 gap-6 pb-10 border-b">
        <div className="flex gap-4 items-center">
          <Image
            className="w-[133px] h-[166px] md:w-[109px] md:h-[134px]"
            src={C2}
            alt="basic white vase"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-lg md:text-xl">Basic White Vase</h2>
            <p className="text-sm md:text-base w-[200px]">
              A timeless ceramic vase with a tri-color grey glaze.
            </p>
            <p className="text-sm md:text-base">$85</p>
          </div>
        </div>
        <div className="flex gap-10 md:gap-[450px] items-center">
          <p className="text-sm md:text-base">1</p>
          <p className="text-sm md:text-base">$85</p>
        </div>
      </div>

      {/* Subtotal Section */}
      <div className="flex justify-end mt-6">
        <div className="flex flex-col items-end gap-4">
          <div className="flex items-center gap-10">
            <h2 className="text-lg md:text-2xl">Subtotal</h2>
            <p className="text-lg md:text-2xl">$210</p>
          </div>
          <p className="text-sm md:text-base ">
            Taxes and shipping are calculated at checkout
          </p>
          <button className="px-8 py-4 bg-[#2a254b] text-white">
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
