import Image from "next/image";
import BasicModal from "./Modal";
import { DestinationInfo } from "./DestinationInfo";

export interface DestinationProps {
  id: number;
  description: string;
  location: string;
  images: string;
}

const DestinationCards = ({
  id,
  description,
  location,
  images,
}: DestinationProps) => {
  const stringId = String(id);
  return (
    <div id={stringId} className="relative">
      <Image
        src={images}
        alt={`photo of ${location}`}
        priority
        className="object-cover aspect-[3/2] rounded-lg"
      />
      <div className="absolute flex justify-center bg-gray-600 bg-opacity-70 text-black text-center w-full hover:bg-black hover:text-white rounded-b-lg bottom-0">
        <BasicModal
          icon={location}
          title={location}
          extraContent={<DestinationInfo destinationDesc={description} />}
        />
      </div>
    </div>
  );
};

export default DestinationCards;
