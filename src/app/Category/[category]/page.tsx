type Props = {
  params: {
    category: string;
  };
};
const CategoryItem = ({ params }: Props) => {
  return <h1 className="font-bold text-center">{params.category}</h1>;
};

export default CategoryItem;
