"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FreelancerCard from "../components/FreelancerCard";
import CategoryScroll from "../components/CategoryScroll";
import Filtering from "../components/Filtering";
import Sorting from "../components/Sorting";
import { useFreelancerStore } from "../stores/useFreelancerStore";
import { useEffect } from "react";
import mockData from "../utility/freelancersData.json";

interface freelancer {
  id: number;
  name: string;
  photo: string;
  image: string;
  level: string;
  rate: number;
  Role: string;
  reviews: number;
  price: number;
}

const FreelancingPage = () => {
  const { freelancers, sortBy, setFreelancers, Category } =
    useFreelancerStore();

  useEffect(() => {
    setFreelancers(mockData);
  }, [setFreelancers]);

  const sorted: freelancer[] = [...freelancers].sort((a, b) => {
    switch (sortBy) {
      case "most-rated":
        return b.rate - a.rate;
      case "lowest-rated":
        return a.rate - b.rate;
      case "highest-price":
        return b.price - a.price;
      case "lowest-price":
        return a.price - b.price;
      default:
        return 0;
    }
  });
  //const freelancers = freelancersData;
  const freelancersList = sorted.map((freelancer: freelancer) => {
    return <FreelancerCard freelancer={freelancer} key={freelancer.id} />;
  });
  return (
    <>
      <div className="container mx-auto">
        <header className="p-4 ">
          <Header />
        </header>
        <CategoryScroll />

        <section className="p-4">
          <div className="text-xl font-semibold mb-4">
            Results For {Category}
          </div>
          <Filtering />
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-600 font-bold w-67">
              <SearchBar />
            </div>

            <div>
              <Sorting />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-600 font-bold">
              {sorted.length} Result
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {freelancersList}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FreelancingPage;
