const ShowArticlePage = ({ params }: { params: { Title: string } }) => {
  return (
    <>
      <div>Show Article with Title: {params.Title}</div>
    </>
  );
};

export default ShowArticlePage;
