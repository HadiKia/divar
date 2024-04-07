import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProfile } from "services/user";
import { useQuery } from "@tanstack/react-query";

// icons
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
import AuthModal from "components/AuthModal";

function Header() {
  const { data } = useQuery(["profile"], getProfile);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

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
          <button onClick={() => (data ? navigate("/dashboard") : openModal())}>
            <span className={loginButtonStyle}>
              <UserIcon />
              <p>دیوار من</p>
            </span>
          </button>
          <button
            onClick={() => (data ? navigate("/dashboard") : openModal())}
            className={dashboardButtonStyle}
          >
            ثبت آگهی
          </button>
        </div>

        <AuthModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </header>
  );
}

export default Header;
