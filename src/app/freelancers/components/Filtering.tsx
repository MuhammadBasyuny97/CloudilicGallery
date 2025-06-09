//"using react";

const Filtering = () => {
  return (
    <div className="grid md:grid-cols-5 gap-4 mb-6">
      <select className="border rounded px-3 py-2">
        <option>Service Category</option>
        <option>Photographer</option>
        <option>UI/UX Design</option>
        <option>Video&Editing</option>
      </select>
      <select className="border rounded px-3 py-2">
        <option>Seller Details</option>
      </select>
      <select className="border rounded px-3 py-2">
        <option>Budget</option>
        <option>10$</option>
        <option>100$</option>
        <option>1000$</option>
      </select>
      <select className="border rounded px-3 py-2">
        <option>Delivery Time</option>
        <option>1 day</option>
        <option>7 day</option>
        <option>1 Month</option>
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
