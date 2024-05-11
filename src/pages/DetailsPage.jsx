import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getPost } from "services/user";
import { getCategory } from "services/admin";
import { sp } from "utils/numbers";

import Loader from "components/Loader";
import GalleryIcon from "assets/icons/GalleryIcon";
import ArrowLeft from "assets/icons/ArrowLeft";
import ArrowRight from "assets/icons/ArrowRight";

// styles
import {
  containerStyle,
  breadcrumbsStyle,
  mainStyle,
  imageDivStyle,
  imageStyle,
  blankImageStyle,
  categoryStyle,
  titleStyle,
  cityStyle,
  buttonStyle,
  aStyle,
  priceStyle,
  updatedAtStyle,
  descriptionStyle,
  contentStyle,
} from "styles/detailsPageStyle";

function DetailsPage() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const { id } = useParams();

  const { data, refetch, isFetching } = useQuery(["post"], () => getPost(id));

  useEffect(() => {
    refetch();
  }, []);

  if (isFetching) return <Loader />;

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
    <div className={containerStyle}>
      <div className={breadcrumbsStyle}>
        <Link to="/" className="py-2">
          صفحه اصلی
        </Link>
        <ArrowLeft />
        <Link to={`/?city=${options.city}`} className="py-2">
          {options.city}
        </Link>
        <ArrowLeft />
        <Link to={`/?category=${category}`} className="py-2">
          <RenderCategory categoryName={category} />
        </Link>
        <ArrowLeft />
        <span className="opacity-70">{options.title}</span>
      </div>

      <div className={mainStyle}>
        <div className={imageDivStyle}>
          {images.length ? (
            <img src={`${baseURL}${images}`} className={imageStyle} />
          ) : (
            <span className={blankImageStyle}>
              <GalleryIcon />
            </span>
          )}
        </div>

        <div className="px-4 md:px-0 md:flex-1">
          <div className={categoryStyle}>
            <ArrowRight />
            <Link to={`/?category=${category}`}>
              <RenderCategory categoryName={category} />
            </Link>
          </div>
          <h2 className={titleStyle}>{options.title}</h2>
          <div className={cityStyle}>
            <Link to={`/?city=${options.city}`}>{options.city}</Link>
            <span> {new Date(createdAt).toLocaleDateString("fa-IR")}</span>
          </div>
          <button className={buttonStyle}>
            <a href={`tel:${userMobile}`} className={aStyle}>
              اطلاعات تماس
            </a>
          </button>
          <div>
            {category !== "66344014638cf78dff8677d6" && (
              <div className={priceStyle}>
                <span className="text-secondary">قیمت</span>
                <span>{sp(amount)} تومان</span>
              </div>
            )}

            <div className={updatedAtStyle}>
              <span className="text-secondary">آخرین به‌روزرسانی آگهی</span>
              <span>{new Date(updatedAt).toLocaleDateString("fa-IR")}</span>
            </div>
            <h3 className={descriptionStyle}>توضیحات</h3>
            <p className={contentStyle}>{options.content}</p>
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

  return categoryData?.name;
}
