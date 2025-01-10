import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck, CiMoneyCheck1 } from "react-icons/ci";
import { PiPlantLight } from "react-icons/pi";

function BrandIntro() {
  const brandDetails = [
    {
      icon: <TbTruckDelivery />,
      heading : "Next Day as Standard",
      description: "Order before 3pm and get your order the next day as standard"
    },
    {
      icon: <CiCircleCheck />,
      heading : "Made by true artisans",
      description: "Handmade crafted goods made with real passion and craftmanship"
    },
    {
      icon: <CiMoneyCheck1 />,
      heading : "Unbeatable prices",
      description: "For our materials and quality you will not find better prices anywhere"
    },
    {
      icon: <PiPlantLight />,
      heading : "Recycled packaging",
      description: "We use 100% recycled packaging to ensure our footprint is manageable"
    },
  ]
  return (
    <div className="sm:my-20 my-10 md:mx-20 sm:mx-10 mx-5">
      <h1 className="text-2xl sm:text-center my-10">What makes our brand different</h1>
      <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-16 ">
        {brandDetails.map((item, i)=>(

        <div key={i} className="flex flex-col gap-4 w-full md:w-[270px] sm:text-center md:text-left text-left">
          <p className="text-xl sm:mx-auto md:mx-0">{item.icon}</p>
          <p className="text-xl">{item.heading}</p>
          <p>{item.description}</p>
        </div>
        ))}
      </div>
    </div>
  );
}

export default BrandIntro;
