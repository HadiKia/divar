import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPost } from "services/user";
import { getCategory } from "services/admin";

import Loader from "components/Loader";
import GalleryIcon from "assets/icons/GalleryIcon";
import { sp } from "utils/numbers";

function DetailsPage() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const { id } = useParams();
  const { data, isLoading } = useQuery(["post"], () => getPost(id));

  if (isLoading) return <Loader />;

  const {
    amount,
    category,
    createdAt,
    images,
    options,
    userMobile,
    updatedAt,
  } = data.data.post;

  return (
    <div className="container mx-auto max-w-screen-lg md:px-4 md:pt-20">
      <div className="pb-28 flex flex-col md:flex-row-reverse md:items-start md:justify-between md:gap-x-10">
        <div className="md:flex-1 md:flex md:justify-end ">
          {images.length ? (
            <img
              src={`${baseURL}${images}`}
              className="w-full max-h-[340px] md:max-w-[400px] md:max-h-[380px] md:rounded"
            />
          ) : (
            <span className="w-full grid place-items-center bg-[#EBEBEB] text-secondary h-[340px] md:max-w-[400px] md:h-[380px] md:rounded">
              <GalleryIcon />
            </span>
          )}
        </div>

        <div className="px-4 md:px-0 md:flex-1">
          <RenderCategory categoryName={category} />
          <h2 className="text-dark text-xl font-medium mb-2.5">
            {options.title}
          </h2>
          <div className="flex items-center justify-between text-sm text-secondary mb-7">
            <span>{options.city}</span>
            <span> {new Date(createdAt).toLocaleDateString("fa-IR")}</span>
          </div>
          <div className="flex flex-col-reverse">
            <div>
              {category !== "66344014638cf78dff8677d6" && (
                <div className="flex items-center justify-between text-dark py-3 border-t">
                  <span className="text-secondary">قیمت</span>
                  <span>{sp(amount)} تومان</span>
                </div>
              )}

              <div className="flex items-center justify-between text-dark py-3 mb-6 border-y">
                <span className="text-secondary">آخرین به‌روزرسانی آگهی</span>
                <span>{new Date(updatedAt).toLocaleDateString("fa-IR")}</span>
              </div>
              <h3 className="text-dark text-lg font-medium mb-1.5">توضیحات</h3>
              <p className="text-dark text-sm leading-7">{options.content}</p>
            </div>
            <button className="fixed left-0 right-0 bottom-0 h-[64px] border-t z-20 bg-white px-4 py-3 md:relative md:border-t-0 md:w-full md:px-0 md:mb-5">
              <a
                href={`tel:${userMobile}`}
                className="h-full flex items-center justify-center rounded bg-primary text-white font-medium"
              >
                اطلاعات تماس
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;

function RenderCategory({ categoryName }) {
  const { data } = useQuery(["get-categories"], getCategory);
  const categoryData = data?.data.find((cat) => cat._id === categoryName);

  return (
    <div className="py-6 text-xs text-secondary md:hidden">
      دسته بندی : {categoryData?.name}
    </div>
  );
}
