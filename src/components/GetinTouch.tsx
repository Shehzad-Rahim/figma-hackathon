import Image from "next/image";
import Link from "next/link";
import sofa from "../../public/images/getintouch.png";

function GetinTouch() {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Text Section */}
      <div className="lg:w-1/2 w-full flex flex-col justify-between px-5 py-14 md:px-20 sm:px-10 gap-6">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-center lg:text-left">
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p className="text-gray-700 text-center lg:text-left">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-gray-700 text-center lg:text-left">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start">
          <Link
            href={"/contact"}
            className="flex justify-center items-center w-[150px] h-[56px] bg-[#f9f9f9] text-black font-medium"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 w-full">
        <Image
          className="w-full h-auto object-cover"
          src={sofa}
          alt="sofa"
        />
      </div>
    </div>
  );
}

export default GetinTouch;
