import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPost } from "services/user";
import Loader from "components/Loader";

function DetailsPage() {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["post"], () => getPost(id));

  if (isLoading) return <Loader />;

  console.log(data.data.post);

  return <div>DetailsPage</div>;
}

export default DetailsPage;
