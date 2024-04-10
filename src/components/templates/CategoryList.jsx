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
    <div>
      {isFetching ? (
        <ReactLoading
          type="spinningBubbles"
          color="#A62626"
          height={40}
          width={40}
        />
      ) : (
        data.data.map((item) => (
          <div key={item._id}>
            {renderIcon(item.icon)}
            <h5>{item.name}</h5>
            <p>slug : {item.slug}</p>
            <button onClick={() => handleDelete(item._id)}>
              <CloseIcon />
            </button>
          </div>
        ))
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
