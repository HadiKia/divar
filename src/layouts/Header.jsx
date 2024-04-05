import { Link } from "react-router-dom";
import DivarIcon from "assets/icons/DivarIcon";
import LocationIcon from "assets/icons/LocationIcon";
import UserIcon from "assets/icons/UserIcon";

function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <DivarIcon />
        </Link>
        <span>
          <LocationIcon />
          <p>تهران</p>
        </span>
      </div>

      <div>
        <Link to="/auth">
          <span>
            <UserIcon />
            <p>دیوار من</p>
          </span>
        </Link>

        <Link to="/dashboard">ثبت آگهی</Link>
      </div>
    </header>
  );
}

export default Header;
