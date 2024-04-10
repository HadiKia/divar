import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";
import ReactLoading from "react-loading";

// icons
import HomeIcon from "assets/icons/HomeIcon";
import CarIcon from "assets/icons/CarIcon";
import DigitalIcon from "assets/icons/DigitalIcon";
import ServiceIcon from "assets/icons/ServiceIcon";
import GameIcon from "assets/icons/GameIcon";
import PersonalIcon from "assets/icons/PersonalIcon";

function CategoryList() {
  const { data, isLoading } = useQuery(["get-categories"], getCategory);
  console.log({ data, isLoading });

  return (
    <div>
      {isLoading ? (
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
          </div>
        ))
      )}
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
