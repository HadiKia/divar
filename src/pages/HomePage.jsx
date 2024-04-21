import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "services/user";
import { getCategory } from "services/admin";

import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";
import Loader from "components/Loader";

import { containerStyle, sideBarDivStyle } from "styles/homePageStyle";

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
    <div className={containerStyle}>
      {postLoading || categoryLoading ? (
        <Loader />
      ) : (
        <>
          <div className={sideBarDivStyle}>
            <Sidebar categories={categories} />
          </div>
          <Main posts={posts} />
        </>
      )}
    </div>
  );
}

export default HomePage;
