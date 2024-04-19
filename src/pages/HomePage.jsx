import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "services/user";
import { getCategory } from "services/admin";
import ReactLoading from "react-loading";

import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";

function HomePage() {
  const { data: posts, isLoading: postLoading } = useQuery(
    ["post-list"],
    getAllPosts
  );
  const { data: categories, isLoading: categoryLoading } = useQuery(
    ["get-categories"],
    getCategory
  );

  return (
    <div className="container max-w-[1440px] mx-auto px-4 pt-7 pb-20 md:py-10 md:flex md:items-start md:justify-between">
      {postLoading || categoryLoading ? (
        <ReactLoading
          type="spinningBubbles"
          color="#A62626"
          height={40}
          width={40}
        />
      ) : (
        <>
          <div className="hidden md:block md:w-full md:md:max-w-xs">
            <Sidebar categories={categories} />
          </div>
          <Main posts={posts} />
        </>
      )}
    </div>
  );
}

export default HomePage;
