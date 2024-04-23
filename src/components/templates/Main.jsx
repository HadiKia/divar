import { useEffect, useState } from "react";
import { useQueryContext } from "hooks/useQueryContext";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "services/user";
import { filterPosts, searchPosts, shortenText } from "utils/helpers";
import { sp } from "utils/numbers";
import Loader from "components/Loader";

import GalleryIcon from "assets/icons/GalleryIcon";

// styles
import {
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
} from "styles/postListStyle";

function Main() {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const { data, isLoading } = useQuery(["post-list"], getAllPosts);

  const { query } = useQueryContext();

  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    setDisplayed(data?.data.posts);
  }, [data]);

  useEffect(() => {
    let finalPosts = searchPosts(data?.data.posts, query.search);
    finalPosts = filterPosts(finalPosts, query.category);
    setDisplayed(finalPosts);
  }, [query]);

  return (
    <div className={mainStyle}>
      {isLoading ? (
        <Loader />
      ) : (
        displayed?.map((post) => (
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
        ))
      )}
    </div>
  );
}

export default Main;
