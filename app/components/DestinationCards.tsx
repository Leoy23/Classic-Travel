import Image from "next/image";

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
      <div className="absolute bg-white bg-opacity-70 text-black text-center w-full hover:bg-black hover:text-white rounded-b-lg bottom-0">
        <h3 className="uppercase">{location}</h3>
      </div>
    </div>
  );
};

export default DestinationCards;
