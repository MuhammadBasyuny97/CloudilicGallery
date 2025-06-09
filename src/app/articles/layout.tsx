export const metadata = {
  title: "Articles Page",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>Layout for Articles</div>
      <div className="text-2xl bg-amber-700 flex flex-col justify-center items-center">
        {children}
      </div>
    </>
  );
};
export default Layout;
