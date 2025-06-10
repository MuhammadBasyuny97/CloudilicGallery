type params = { category: string };
const CategoryItem = ({ params }: { params: params }) => {
  return <h1 className="font-bold text-center">{params.category}</h1>;
};

export default CategoryItem;
