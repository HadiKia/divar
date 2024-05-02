import { useEffect, useState } from "react";
import { useQueryContext } from "hooks/useQueryContext";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "services/user";
import {
  filterCategoryPosts,
  filterCityPosts,
  getInitialQuery,
  searchPosts,
} from "utils/helpers";
import { useSearchParams } from "react-router-dom";
import { sp } from "utils/numbers";
import Loader from "components/Loader";
import empty from "assets/images/empty-page.svg";

import GalleryIcon from "assets/icons/GalleryIcon";

// styles
import {
  h3Style,
  blankImageStyle,
  cityDivStyle,
  createdAtStyle,
  descriptionStyle,
  imageBoxStyle,
  imageStyle,
  mainStyle,
  postBoxStyle,
  priceStyle,
  titleStyle,
  notFoundDivStyle,
  notFountTitleStyle,
} from "styles/postListStyle";

function Main() {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const { data, isLoading } = useQuery(["post-list"], getAllPosts);
  const { query, setQuery } = useQueryContext();
  const [displayed, setDisplayed] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(data?.data.posts);
    setQuery(getInitialQuery(searchParams));
  }, [data]);

  useEffect(() => {
    setSearchParams(query);
    let finalPosts = searchPosts(data?.data.posts, query.search);
    finalPosts = filterCategoryPosts(finalPosts, query.category);
    finalPosts = filterCityPosts(finalPosts, query.city);
    setDisplayed(finalPosts);
  }, [query]);

  return (
    <div className="w-full">
      <h3 className={h3Style}>دیوار تهران:‌ انواع آگهی‌ها و خدمات در تهران</h3>
      <div className={mainStyle}>
        {!displayed && isLoading && <Loader />}
        {!displayed?.length && !isLoading && query && (
          <NotFound query={query} />
        )}

        {displayed?.map((post) => (
          <div key={post._id} className={postBoxStyle}>
            <div className={descriptionStyle}>
              <p className={titleStyle}>{post.options.title}</p>
              <div>
                <p className={priceStyle}>{sp(post.amount)} تومان</p>
                <div className={cityDivStyle}>
                  <span>
                    {post.options.city ? post.options.city : "مکان نامشخص"}
                  </span>
                  -
                  <span className={createdAtStyle}>
                    {new Date(post.createdAt).toLocaleDateString("fa-IR")}
                  </span>
                </div>
              </div>
            </div>

            <div className={imageBoxStyle}>
              {post.images.length ? (
                <img
                  src={`${baseURL}${post.images[0]}`}
                  className={imageStyle}
                />
              ) : (
                <span className={blankImageStyle}>
                  <GalleryIcon />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;

function NotFound({ query }) {
  return (
    <div className={notFoundDivStyle}>
      <img src={empty} alt="پیدا نشد" />
      <p className={notFountTitleStyle}>
        {query.search
          ? `آگهی مرتبط با "${query.search}" پیدا نشد.`
          : "اگهی پیدا نشد."}
      </p>
    </div>
  );
}
