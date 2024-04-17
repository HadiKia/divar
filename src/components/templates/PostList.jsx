import { useQuery } from "@tanstack/react-query";
import { getPosts } from "services/user";
import { sp } from "utils/numbers";
import { shortenText } from "utils/helper";
import ReactLoading from "react-loading";

import GalleryIcon from "assets/icons/GalleryIcon";

// styles
import { h3Style } from "styles/categoryFormStyle";
import {
  mainStyle,
  postBoxStyle,
  descriptionStyle,
  titleStyle,
  priceStyle,
  createdAtStyle,
  imageBoxStyle,
  imageStyle,
  blankImageStyle,
} from "styles/postListStyle";

function PostList() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const { data, isLoading } = useQuery(["my-post-list"], getPosts);

  return (
    <div className="flex-1">
      {isLoading ? (
        <ReactLoading
          type="spinningBubbles"
          color="#A62626"
          height={40}
          width={40}
        />
      ) : (
        <>
          <h3 className={h3Style}>آگهی های شما</h3>
          <div className={mainStyle}>
            {data.data.posts.map((post) => (
              <div key={post._id} className={postBoxStyle}>
                <div className={descriptionStyle}>
                  <p className={titleStyle}>
                    {shortenText(post.options.title)}
                  </p>
                  <div>
                    <p className={priceStyle}>{sp(post.amount)} تومان</p>
                    <span className={createdAtStyle}>
                      تاریخ:{" "}
                      {new Date(post.createdAt).toLocaleDateString("fa-IR")}
                    </span>
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
        </>
      )}
    </div>
  );
}

export default PostList;
