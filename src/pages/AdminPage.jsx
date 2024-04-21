import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategory, deleteCategory } from "services/admin";
import toast from "react-hot-toast";

import CategoryForm from "components/templates/CategoryForm";
import CategoryList from "components/templates/CategoryList";
import Loader from "components/Loader";

import { containerStyle } from "styles/adminPageStyle";

function AdminPage() {
  const queryClient = useQueryClient();
  const { data, isLoading: getCategoryLoading } = useQuery(
    ["get-categories"],
    getCategory
  );

  const {
    mutate,
    isLoading: deleteCategoryLoading,
    error,
  } = useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("get-categories");
      toast.success("دسته بندی با موفقیت حذف شد");
    },
  });

  if (getCategoryLoading || deleteCategoryLoading) return <Loader />;


  return (
    <div className={containerStyle}>
      <CategoryList data={data} mutate={mutate} error={error} />
      <CategoryForm />
    </div>
  );
}

export default AdminPage;
