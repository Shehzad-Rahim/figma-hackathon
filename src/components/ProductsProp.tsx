import Image, { StaticImageData } from "next/image";

interface Caramics {
  image: string | StaticImageData;
  title: string;
  price: number;

}

function ProductsProp({ image, title, price }: Caramics) {
  return (
    <div className="flex flex-col sm:gap-4 gap-1 md:w-auto sm:mx-auto">
      <Image
        className='xl:w-[305px] xl:h-[462px] md:w-[260px] md:h-[420px]  sm:w-[200px] sm:h-[335px] w-[163px] h-[233px]'
        src={image}
        alt={title}
      />
      <h2 className="sm:text-xl  text-center md:text-left">{title}</h2>
      <p className="sm:text-lg text-center md:text-left">Price: ${price}</p>
    </div>
  );
}

export default ProductsProp;
