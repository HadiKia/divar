import { Link } from "react-router-dom";
import DivarIcon from "assets/icons/DivarIcon";
import LocationIcon from "assets/icons/LocationIcon";
import UserIcon from "assets/icons/UserIcon";
import SearchIcon from "assets/icons/SearchIcon";

// styles
import {
  buttonsDivStyle,
  dashboardButtonStyle,
  borderStyle,
  locationStyle,
  searchBoxStyle,
  inputStyle,
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
          <span className={borderStyle}></span>
          <span className={locationStyle}>
            <LocationIcon />
            <p>تهران</p>
          </span>

          <div className={searchBoxStyle}>
            <SearchIcon />
            <input
              type="text"
              placeholder="جستجو در همهٔ آگهی‌ها"
              className={inputStyle}
            />
          </div>
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
