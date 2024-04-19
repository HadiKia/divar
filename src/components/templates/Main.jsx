import { shortenText } from "utils/helper";
import { sp } from "utils/numbers";

import GalleryIcon from "assets/icons/GalleryIcon";

// styles
import {
  blankImageStyle,
  createdAtStyle,
  descriptionStyle,
  imageBoxStyle,
  imageStyle,
  mainStyle,
  postBoxStyle,
  priceStyle,
  titleStyle,
} from "styles/postListStyle";

function Main({ posts }) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  return (
    <div className={mainStyle}>
      {posts.data.posts.map((post) => (
        <div key={post._id} className={postBoxStyle}>
          <div className={descriptionStyle}>
            <p className={titleStyle}>
              {post.options.title?.length >= 5
                ? shortenText(post.options.title)
                : post.options.title}
            </p>
            <div>
              <p className={priceStyle}>{sp(post.amount)} تومان</p>
              <span className={createdAtStyle}>
                تاریخ: {new Date(post.createdAt).toLocaleDateString("fa-IR")}
              </span>
            </div>
          </div>

          <div className={imageBoxStyle}>
            {post.images.length ? (
              <img src={`${baseURL}${post.images[0]}`} className={imageStyle} />
            ) : (
              <span className={blankImageStyle}>
                <GalleryIcon />
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
