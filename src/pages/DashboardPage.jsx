import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { getPosts, deletePost } from "services/user";
import { useTitle } from "hooks/useTitle";

import Loader from "components/Loader";
import AddPost from "components/templates/AddPost";
import PostList from "components/templates/PostList";
import toast from "react-hot-toast";

import { containerStyle } from "styles/dashboardPageStyle";

function DashboardPage() {
  useTitle("داشبورد");
  const { data, isLoading: isLoadingPosts } = useQuery(
    ["my-post-list"],
    getPosts
  );
  const queryClient = useQueryClient();
  const { mutate, isLoading: isLoadingDelete } = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("my-post-list");
      toast.success("آگهی با موفقیت حذف شد");
    },
    onerror: () => {
      toast.error("مشکلی در حذف آگهی پیش آمده است");
    },
  });

  if (isLoadingPosts || isLoadingDelete) return <Loader />;

  return (
    <div className={containerStyle}>
      <AddPost />
      <PostList data={data} mutate={mutate} />
    </div>
  );
}

export default DashboardPage;
