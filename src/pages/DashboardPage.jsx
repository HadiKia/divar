import AddPost from "components/templates/AddPost";

function DashboardPage() {
  return (
    <div className="container max-w-[1440px] mx-auto px-4 pt-7 pb-14 md:py-10 md:min-h-[calc(100vh_-_100px)]">
      <AddPost />
    </div>
  );
}

export default DashboardPage;
