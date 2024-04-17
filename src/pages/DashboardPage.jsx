import AddPost from "components/templates/AddPost";
import PostList from "components/templates/PostList";

function DashboardPage() {
  return (
    <div className="container max-w-[1440px] mx-auto px-4 pt-7 pb-20 md:py-10 flex flex-col gap-y-5 md:gap-x-10 md:flex-row md:items-start md:justify-between md:min-h-[calc(100vh_-_100px)]">
      <AddPost />
      <PostList />
    </div>
  );
}

export default DashboardPage;
