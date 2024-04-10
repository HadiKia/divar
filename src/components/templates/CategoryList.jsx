import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategory, deleteCategory } from "services/admin";
import ReactLoading from "react-loading";

// icons
import HomeIcon from "assets/icons/HomeIcon";
import CarIcon from "assets/icons/CarIcon";
import DigitalIcon from "assets/icons/DigitalIcon";
import ServiceIcon from "assets/icons/ServiceIcon";
import GameIcon from "assets/icons/GameIcon";
import PersonalIcon from "assets/icons/PersonalIcon";
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
    onSuccess: () => queryClient.invalidateQueries("get-categories"),
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
                <span className={iconStyle}>{renderIcon(item.icon)}</span>
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

function renderIcon(iconName) {
  switch (iconName) {
    case "home":
      return <HomeIcon />;
    case "car":
      return <CarIcon />;
    case "digital":
      return <DigitalIcon />;
    case "service":
      return <ServiceIcon />;
    case "game":
      return <GameIcon />;
    case "personal":
      return <PersonalIcon />;
    default:
      return null;
  }
}
