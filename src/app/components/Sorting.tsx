"use client";

import { useFreelancerStore, SortKey } from "../stores/useFreelancerStore";

const Sorting = () => {
  const { sortBy, setSortBy } = useFreelancerStore();
  return (
    <select
      name="sort"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value as SortKey)}
      className="border rounded px-3 py-2"
    >
      <option value="most-rated">Most Rated</option>
      <option value="lowest-rated">Lowest Rated</option>
      <option value="highest-price">Highest Price</option>
      <option value="lowest-price">Lowest Price</option>
    </select>
  );
};

export default Sorting;
