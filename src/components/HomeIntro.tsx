import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck, CiMoneyCheck1 } from "react-icons/ci";
import { PiPlantLight } from "react-icons/pi";

function HomeIntro() {
  return (
    <div className="sm:my-20 my-10 md:mx-20 sm:mx-10 mx-5">
      <h1 className="text-2xl sm:text-center my-10">What makes our brand different</h1>
      <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-16 ">
        <div className="flex flex-col gap-4 w-full md:w-[270px] sm:text-center md:text-left text-left">
          <TbTruckDelivery className="text-xl sm:mx-auto md:mx-0" />
          <p className="text-xl">Next Day as Standard</p>
          <p>
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[270px] sm:text-center md:text-left text-left">
          <CiCircleCheck className="text-xl sm:mx-auto md:mx-0" />
          <p className="text-xl">Next Day as Standard</p>
          <p>
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[270px] sm:text-center md:text-left text-left">
          <CiMoneyCheck1 className="text-xl sm:mx-auto md:mx-0" />
          <p className="text-xl">Next Day as Standard</p>
          <p>
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[270px] sm:text-center md:text-left text-left">
          <PiPlantLight className="text-xl sm:mx-auto md:mx-0" />
          <p className="text-xl">Next Day as Standard</p>
          <p>
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeIntro;
