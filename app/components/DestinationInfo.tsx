export interface Description {
  destinationDesc: string;
}

export const DestinationInfo = ({ destinationDesc }: Description) => {
  return (
    <div className="text-center text-wrap p-2">
      <p>{destinationDesc}</p>
    </div>
  );
};
