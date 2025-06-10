import Image from "next/image";
const Rating = () => {
  return (
    <div className=" green-500  flex">
      <Image
        alt="star"
        width={4}
        height={4}
        src="/star.png"
        className="w-4 h-4"
      />
    </div>
  );
};

export default Rating;
