import AddPost from "components/templates/AddPost";
import PostList from "components/templates/PostList";

import { containerStyle } from "styles/dashboardPageStyle";

function DashboardPage() {
  return (
    <div className={containerStyle}>
      <AddPost />
      <PostList />
    </div>
  );
}

export default DashboardPage;
