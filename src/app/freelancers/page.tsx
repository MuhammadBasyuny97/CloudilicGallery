import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FreelancerCard from "./components/FreelancerCard";
import freelancersData from "../utility/freelancersData.json";
import CategoryScroll from "./components/CategoryScroll";
import Filtering from "./components/Filtering";

const FreelancingPage = () => {
  const freelancers = freelancersData;
  const freelancersList = freelancers.map((freelancer) => {
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
            Results For (UI/UX Design)
          </div>
          <Filtering />
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-600 font-bold w-67">
              <SearchBar />
            </div>

            <div>
              <select className="border rounded px-3 py-2">
                <option>Most Rated</option>
                <option>Lowest Rated</option>
                <option>Highest Price</option>
                <option>Lowest Price</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-600 font-bold">
              {freelancers.length} Result
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
