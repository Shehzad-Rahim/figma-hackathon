import Image from 'next/image'
import C1 from '../../../public/images/cart1.png'
import C2 from '../../../public/images/cart2.png'
function page() {
  return (
    <div className=" bg-[#f9f9f9] px-28 py-14">
    <h1 className="text-4xl">
        Your shopping cart
    </h1>
    <div className="flex justify-between py-2 border-b">
        <div>
        <p className="text-sm">Product</p>
        </div>
        <div className="flex gap-[450px]">
        <p className="text-sm">Quantity</p>
        <p className="text-sm">Total</p>
        </div>
    </div>

    {/* product1  */}
    <div className='flex justify-between my-5'>
      <div className='flex gap-4 w-[309px] items-center '>
      <Image className='w-[109px] h-[134px]' src={C1} alt='greystore vase'></Image>
      <div className="flex flex-col gap-2">
      <h2 className="text-xl">Greystone vase</h2>
      <p>A timeless ceramic vase with 
      a tri color grey glaze.</p>
      <p>$85</p>
      </div>
      </div>
      <div className="flex gap-[450px]">
        <p className="text-sm">1</p>
        <p className="text-sm">$85</p>
        </div>
    </div>

    {/* product2  */}
    <div className='flex justify-between my-5 pb-10 border-b'>
      <div className='flex gap-4 w-[309px] items-center '>
      <Image className='md:w-[109px] w-[133px] md:h-[134px] h-[166px]' src={C2} alt='basic white vase'></Image>
      <div className="flex flex-col gap-2">
      <h2 className="text-xl">Greystone vase</h2>
      <p>A timeless ceramic vase with 
      a tri color grey glaze.</p>
      <p>$85</p>
      </div>
      </div>
      <div className="flex gap-[450px]">
        <p className="text-sm">1</p>
        <p className="text-sm">$85</p>
        </div>
    </div>
    <div className="flex justify-end">
      <div className='flex flex-col items-end gap-4'>
        <div className='flex items-center gap-2'>
        <h2 className='text-2xl'>Subtotal</h2>
        <p className='text-2xl'>$210</p>
        </div>
        <p>Taxes and shipping are calculated at checkout</p>
        <button className='px-8 py-4 bg-[#2a254b] text-white'>
        Go to Checkout
        </button>
      </div>
    </div>
    </div>
  )
}

export default page