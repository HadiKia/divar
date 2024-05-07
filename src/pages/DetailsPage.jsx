import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPost } from "services/user";
import { getCategory } from "services/admin";

import Loader from "components/Loader";
import GalleryIcon from "assets/icons/GalleryIcon";

function DetailsPage() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const { id } = useParams();
  const { data, isLoading } = useQuery(["post"], () => getPost(id));

  if (isLoading) return <Loader />;

  const { category, createdAt, images, options, userMobile } = data.data.post;

  return (
    <div>
      <div>
        <div>
          {images.length ? (
            <img src={`${baseURL}${images}`} />
          ) : (
            <span>
              <GalleryIcon />
            </span>
          )}
        </div>

        <div>
          <RenderCategory categoryName={category} />
          <h2>{options.title}</h2>
          <div>
            <span>{options.city}</span>
            <span> {new Date(createdAt).toLocaleDateString("fa-IR")}</span>
          </div>
          <h3>توضیحات:</h3>
          <p>{options.content}</p>
        </div>

        <button>
          <a href={`tel:${userMobile}`}>اطلاعات تماس</a>{" "}
        </button>
      </div>
    </div>
  );
}

export default DetailsPage;

function RenderCategory({ categoryName }) {
  const { data } = useQuery(["get-categories"], getCategory);
  const categoryData = data?.data.find((cat) => cat._id === categoryName);

  return <div>دسته بندی : {categoryData?.name}</div>;
}
