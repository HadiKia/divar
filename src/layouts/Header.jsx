import { Link } from "react-router-dom";
import DivarIcon from "assets/icons/DivarIcon";
import LocationIcon from "assets/icons/LocationIcon";
import UserIcon from "assets/icons/UserIcon";

// styles
import {
  buttonsDivStyle,
  dashboardButtonStyle,
  locationStyle,
  loginButtonStyle,
  logoDivStyle,
  logoStyle,
  navbarStyle,
} from "styles/headerStyle";

function Header() {
  return (
    <header className="shadow">
      <div className={navbarStyle}>
        <div className={logoDivStyle}>
          <Link to="/" className={logoStyle}>
            <DivarIcon />
          </Link>
          <span className={locationStyle}>
            <LocationIcon />
            <p>تهران</p>
          </span>
        </div>

        <div className={buttonsDivStyle}>
          <Link to="/auth">
            <span className={loginButtonStyle}>
              <UserIcon />
              <p>دیوار من</p>
            </span>
          </Link>

          <Link to="/dashboard" className={dashboardButtonStyle}>
            ثبت آگهی
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
