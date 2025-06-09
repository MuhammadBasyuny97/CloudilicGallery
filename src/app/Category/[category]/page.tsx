const CategoryItem = ({ params }: { params: { category: string } }) => {
  return <h1 className="font-bold text-center">{params.category}</h1>;
};

export default CategoryItem;
