"use client";

import { categories } from "@/app/utility/categories";

import { useFreelancerStore } from "../stores/useFreelancerStore";

function CategoryScroll() {
  const { setCategory } = useFreelancerStore();

  const clickedHandler = (category: string) => {
    setCategory(category);
  };
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap py-3 px-4 ">
      <div className="inline-flex ">
        {categories.map((category) => (
          <button
            onClick={() => clickedHandler(category)}
            key={category}
            id={category}
            className={`px-4 py-1.5 cursor-pointer  rounded-full border  border-gray-300 text-sm whitespace-nowrap hover:bg-green-600 hover:text-white transition`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
export default CategoryScroll;
