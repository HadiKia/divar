import { Link } from "react-router-dom";
import { sp } from "utils/numbers";
import empty from "assets/images/empty-page.svg";
import GalleryIcon from "assets/icons/GalleryIcon";
import TrashIcon from "assets/icons/TrashIcon";

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
  cityDivStyle,
  notFoundDivStyle,
  notFountTitleStyle,
} from "styles/postListStyle";

function PostList({ data, mutate }) {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const handleDelete = (postId) => {
    mutate(postId);
  };

  return (
    <div className="flex-1">
      <h3 className={h3Style}>آگهی های شما</h3>
      <div className={mainStyle}>
        {data.data.posts.map((post) => (
          <Link key={post._id} to={`/details-page/${post._id}`}>
            <div key={post._id} className={postBoxStyle}>
              <div className={descriptionStyle}>
                <p className={titleStyle}>{post.options.title}</p>
                <div>
                  {post.category !== "66344014638cf78dff8677d6" && (
                    <p className={priceStyle}>{sp(post.amount)} تومان</p>
                  )}
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
                <button onClick={() => handleDelete(post._id)}>
                  <TrashIcon />
                </button>
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
          </Link>
        ))}

        {!data.data.posts.length && (
          <div className={notFoundDivStyle}>
            <img src={empty} alt="پیدا نشد" />
            <p className={notFountTitleStyle}>
              شما هنوز هیچ آگهی ثبت نکرده‌اید.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostList;
