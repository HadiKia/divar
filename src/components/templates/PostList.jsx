import { useQuery } from "@tanstack/react-query";
import { getPosts } from "services/user";
import { sp } from "utils/numbers";
import ReactLoading from "react-loading";

import GalleryIcon from "assets/icons/GalleryIcon";

// styles
import { h3Style } from "styles/categoryFormStyle";

function PostList() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const { data, isLoading } = useQuery(["my-post-list"], getPosts);

  return (
    <div className="flex-1 md:max-w-sm lg:max-w-md xl:max-w-2xl">
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
          {data.data.posts.map((post) => (
            <div key={post._id}>
              <div>
                {post.images.length ? (
                  <img
                    src={`${baseURL}${post.images[0]}`}
                    className="w-[136px] h-[136px]"
                  />
                ) : (
                  <span className="w-[136px] h-[136px]">
                    <GalleryIcon />
                  </span>
                )}
              </div>
              <div>
                <p>{post.options.title}</p>

                <div>
                  <p>{sp(post.amount)} تومان</p>
                  <span>
                    {new Date(post.createdAt).toLocaleDateString("fa-IR")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;
