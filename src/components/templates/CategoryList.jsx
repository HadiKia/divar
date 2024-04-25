import RenderIcon from "components/RenderIcon";

// icons
import TrashIcon from "assets/icons/TrashIcon";

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

function CategoryList({ data, mutate, error }) {
  const handleDelete = (categoryId) => {
    mutate(categoryId);
  };

  return (
    <div className={mainStyle}>
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
            <TrashIcon />
          </button>
        </div>
      ))}
      {!!error && <p className="bg-primary text-white">مشکلی پیش آمده است</p>}
    </div>
  );
}

export default CategoryList;
