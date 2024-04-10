import CategoryForm from "components/templates/CategoryForm";
import CategoryList from "components/templates/CategoryList";

function AdminPage() {
  return (
    <div className="container max-w-[1440px] mx-auto px-4 flex flex-col gap-y-5 md:gap-x-10 md:flex-row-reverse md:items-start md:justify-between pt-7 pb-14 md:py-10 md:min-h-[calc(100vh_-_100px)]">
      <CategoryList />
      <CategoryForm />
    </div>
  );
}

export default AdminPage;
