import Image from "next/image";
import heroImg from "@/public/travel-img.jpg";

const HomeImg = () => {
  return (
    <div>
      <div className="">
        <Image
          src={heroImg}
          alt="black konica camera ontop of a map"
          priority
          className="w-full h-auto aspect-[4/1] object-cover border-b-4 border-black"
        />
      </div>
    </div>
  );
};

export default HomeImg;
