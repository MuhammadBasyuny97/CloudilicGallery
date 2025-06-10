//"use client";

import Rating from "./Rating";
import Link from "next/link";
import Image from "next/image";

type freelancer = {
  id: number;
  name: string;
  photo: string;
  image: string;
  level: string;
  rate: number;
  Role: string;
  reviews: number;
  price: number;
};
const FreelancerCard = ({ freelancer }: { freelancer: freelancer }) => {
  const ratingCount = freelancer.rate;
  const ratingRender = [];
  for (let i = 0; i < ratingCount; i++) {
    ratingRender.push(<Rating key={i} />);
  }
  return (
    <>
      <div key={freelancer.id} className="border rounded-lg shadow p-4">
        {/* image and wishlist icon */}
        <div className="h-50 w-full relative">
          <img
            src={freelancer.photo}
            className="rounded-md mb-2 h-24 w-full h-full"
          />
          <div className="absolute cursor-pointer top-2 right-2 w-8 h-8 bg-white flex justify-center items-center ">
            <Image
              alt="wishlist"
              width={5}
              height={5}
              src="/heart.png"
              className="w-5 h-5 "
            />
          </div>
        </div>
        {/* freelancer info */}
        <div className="flex items-center gap-1.5 m-3">
          <Image
            width={10}
            height={10}
            src={freelancer.image}
            alt="profile"
            className="w-10 h-10 rounded-b-full"
          />
          <h3 className="font-semibold">{freelancer.name}</h3>
        </div>
        {/* freelancer details */}
        <div className="pl-3">
          <div className="mb-2 flex justify-between items-center">
            <h1 className="font-semibold">{freelancer.level}</h1>
            <div className="flex gap-1 justify-center">{ratingRender}</div>
          </div>

          <p className=" mb-2 font-bold text-sm text-gray-500">
            {freelancer.Role}
          </p>
          <span className="mb-2 flex items-center gap-1">
            <Rating /> ({freelancer.reviews}) Reviews
          </span>
          <p className="font-bold">From ${freelancer.price}</p>
          <Link href={`/freelancers/${freelancer.id}`}>
            <button
              type="button"
              className="mt-2 bg-green-700 cursor-pointer text-white px-4 py-1 w-full rounded-md text-sm"
            >
              See More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FreelancerCard;
