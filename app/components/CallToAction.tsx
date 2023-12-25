import TourIcon from "@mui/icons-material/Tour";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="text-center w-full flex flex-col items-center p-8 lg:p-16">
      <div className="py-2">
        <h2 className="text-3xl lg:text-7xl">
          Find The Best Offers For You & Your Family
        </h2>
        <p className="text-sm lg:text-base py-8">
          Forget about everything, relax, and explore the most beautiful places
          in the world
        </p>
      </div>
      <div className="bg-black text-white flex items-center justify-center px-4 py-6 gap-2 hover:bg-yellow-500 rounded-lg">
        <p className="">Special offers for family tours</p>
        <TourIcon className="text-white" />
      </div>
    </div>
  );
};

export default CallToAction;
