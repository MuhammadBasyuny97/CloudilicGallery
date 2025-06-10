const Card = async ({ params }: { params: { card: string } }) => {
  const cardId = params.card;
  console.log("Hi Freelancer Card: ", cardId);
  return <h1 className="text-center font-bold ">Hi FreelancerCard {cardId}</h1>;
};

export default Card;
