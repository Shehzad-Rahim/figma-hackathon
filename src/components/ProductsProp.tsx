import Image, { StaticImageData } from "next/image";

interface PropType {
  image: string | StaticImageData;
  title: string;
  price: number;

}

function ProductsProp({ image, title, price }: PropType) {
  return (
    <div className="flex flex-col sm:gap-4 gap-1 md:w-auto sm:mx-auto shadow-sm hover:shadow-lg hover:scale-105 transition-all rounded-[3px] overflow-hidden">
      <Image
        className='xl:w-[305px] xl:h-[462px] md:w-[260px] md:h-[420px]  sm:w-[200px] sm:h-[335px] w-[163px] h-[233px]'
        src={image}
        alt={title}
        width={500}
        height={500}
      />
      <div className="flex flex-col gap-2 pb-2 px-2 ">
      <h2 className="sm:text-xl  text-center md:text-left">{title}</h2>
      <p className="sm:text-lg text-center md:text-left">Price: ${price}</p>
      </div>
    </div>
  );
}

export default ProductsProp;
