import Image, { StaticImageData } from "next/image";

interface Caramics {
  image: string | StaticImageData;
  P_alt: string;
  title: string;
  price: number;

}

function ProductsProp({ image, P_alt, title, price }: Caramics) {
  return (
    <div className="flex flex-col gap-4 md:w-auto mx-auto">
      <Image
        className='sm:w-[305px] sm:h-[462px] w-[200px] h-[335px]'
        src={image}
        alt={P_alt}
      />
      <h2 className="text-xl text-center md:text-left">{title}</h2>
      <p className="text-lg text-center md:text-left">Price: ${price}</p>
    </div>
  );
}

export default ProductsProp;
