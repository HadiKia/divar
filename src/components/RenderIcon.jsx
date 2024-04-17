import CarIcon from "assets/icons/CarIcon";
import DigitalIcon from "assets/icons/DigitalIcon";
import GameIcon from "assets/icons/GameIcon";
import HomeIcon from "assets/icons/HomeIcon";
import PersonalIcon from "assets/icons/PersonalIcon";
import ServiceIcon from "assets/icons/ServiceIcon";

function RenderIcon({ iconName }) {
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

export default RenderIcon;
