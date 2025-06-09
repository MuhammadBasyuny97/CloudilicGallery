import Link from "next/link";
const ArticlesPage = () => {
  return (
    <>
      <div className="block">Welcome to Articles Page</div>
      <div className="mx-5 block">
        <Link href="/posts">
          <button className="bg-blue-500 cursor-pointer">
            Got to Posts Page
          </button>
        </Link>
      </div>
    </>
  );
};
export default ArticlesPage;
