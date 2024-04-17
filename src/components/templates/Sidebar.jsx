import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";

// icons
import CarIcon from "assets/icons/CarIcon";
import DigitalIcon from "assets/icons/DigitalIcon";
import GameIcon from "assets/icons/GameIcon";
import HomeIcon from "assets/icons/HomeIcon";
import PersonalIcon from "assets/icons/PersonalIcon";
import ServiceIcon from "assets/icons/ServiceIcon";

// styles
import { h3Style } from "styles/categoryFormStyle";

function Sidebar() {
  const { data } = useQuery(["get-categories"], getCategory);

  return (
    <div>
      <h3 className={h3Style}>دسته بندی ها</h3>
      <ul>
        {data?.data.map((category) => (
          <li key={category._id}>
            {renderIcon(category.icon)}
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

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
