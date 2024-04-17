import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategory, deleteCategory } from "services/admin";
import ReactLoading from "react-loading";
import toast from "react-hot-toast";
import RenderIcon from "components/RenderIcon";

// icons
import CloseIcon from "assets/icons/CloseIcon";

// styles
import { h3Style } from "styles/categoryFormStyle";
import {
  mainStyle,
  categoryBoxStyle,
  containerStyle,
  iconStyle,
  nameStyle,
  slugStyle,
  deleteStyle,
} from "styles/categoryListStyle";

function CategoryList() {
  const queryClient = useQueryClient();
  const { data, isFetching } = useQuery(["get-categories"], getCategory);

  const { mutate, isLoading, error } = useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("get-categories");
      toast.success("دسته بندی با موفقیت حذف شد");
    },
  });

  const handleDelete = (categoryId) => {
    mutate(categoryId);
  };

  if (isLoading)
    return (
      <ReactLoading
        type="spinningBubbles"
        color="#A62626"
        height={40}
        width={40}
      />
    );

  return (
    <div className={mainStyle}>
      {isFetching ? (
        <ReactLoading
          type="spinningBubbles"
          color="#A62626"
          height={40}
          width={40}
        />
      ) : (
        <>
          <h3 className={h3Style}>دسته بندی ها</h3>
          {data.data.map((item) => (
            <div key={item._id} className={categoryBoxStyle}>
              <div className={containerStyle}>
                <span className={iconStyle}>
                  <RenderIcon iconName={item.icon} />
                </span>
                <h5 className={nameStyle}>{item.name}</h5>
                <p className={slugStyle}>slug : {item.slug}</p>
              </div>
              <button
                onClick={() => handleDelete(item._id)}
                className={deleteStyle}
              >
                <CloseIcon />
              </button>
            </div>
          ))}
        </>
      )}
      {!!error && <p className="bg-primary text-white">مشکلی پیش آمده است</p>}
    </div>
  );
}

export default CategoryList;
