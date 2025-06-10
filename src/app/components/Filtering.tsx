//"using react";

const Filtering = () => {
  return (
    <div className="grid md:grid-cols-5 gap-4 mb-6">
      <select name="category" className="border rounded px-3 py-2">
        <option>Service Category</option>
        <option value="Photographer">Photographer</option>
        <option value="UI/UX Design">UI/UX Design</option>
        <option value="Video&Editing">Video&Editing</option>
      </select>
      <select className="border rounded px-3 py-2">
        <option>Seller Details</option>
      </select>
      <select name="budget" className="border rounded px-3 py-2">
        <option>Budget</option>
        <option value="10$">10$</option>
        <option value="100$">100$</option>
        <option value="1000$">1000$</option>
      </select>
      <select name="delivery" className="border rounded px-3 py-2">
        <option>Delivery Time</option>
        <option value="1 day">1 day</option>
        <option value="7 day">7 day</option>
        <option value="1 Month">1 Month</option>
      </select>
      <input
        type="text"
        placeholder="Secondary Location"
        className="border rounded px-3 py-2"
      />
    </div>
  );
};

export default Filtering;
