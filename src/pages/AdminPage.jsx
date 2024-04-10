import CategoryForm from "components/templates/CategoryForm";
import CategoryList from "components/templates/CategoryList";

function AdminPage() {
  return (
    <div className="container max-w-[1440px] mx-auto px-4">
      <CategoryList />
      <CategoryForm />
    </div>
  );
}

export default AdminPage;
