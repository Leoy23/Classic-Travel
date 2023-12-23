import TourIcon from "@mui/icons-material/Tour";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="text-center w-full flex flex-col md:flex-row p-8 lg:p-16">
      <div className="py-2">
        <h2 className="text-3xl lg:text-7xl">
          Find The Best Offer For You & Your Family
        </h2>
        <p className="text-sm lg:text-base py-8">
          Forget about everything, relax, and explore the most beautiful places
          in the World
        </p>
      </div>
      <div className="bg-black text-white text-center w-1/4 h-1/4 p-5 rounded-lg">
        <div className="flex">
          <div className="flex flex-col">
            <h3 className="text-lg mb-4">Family Tour</h3>
            <p className="mb-4">Special offers for family tours</p>
          </div>
          <div className="flex items-center">
            <TourIcon className="text-white" />
          </div>
        </div>
        <Link href={"/destinations"}>
          <p className="text-xs">100+ Destinations</p>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
