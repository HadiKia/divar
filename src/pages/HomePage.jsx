import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";

function HomePage() {
  return (
    <div className="container max-w-[1440px] mx-auto px-4 pt-7 pb-20 md:py-10 md:flex md:items-start md:justify-between">
      <div className="hidden md:block md:w-full md:md:max-w-xs">
        <Sidebar />
      </div>
      <Main />
    </div>
  );
}

export default HomePage;
