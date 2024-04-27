import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProfile } from "services/user";
import { useQuery } from "@tanstack/react-query";
import AuthModal from "components/AuthModal";
import Search from "components/templates/Search";
import AdminPageModal from "components/AdminPageModal";

// icons
import DivarIcon from "assets/icons/DivarIcon";
import LocationIcon from "assets/icons/LocationIcon";
import UserIcon from "assets/icons/UserIcon";

// styles
import {
  buttonsDivStyle,
  dashboardButtonStyle,
  borderStyle,
  locationStyle,
  loginButtonStyle,
  loginButtonActiveStyle,
  logoDivStyle,
  logoStyle,
  navbarStyle,
} from "styles/headerStyle";

function Header({ isOpenAdminModal, setIsOpenAdminModal }) {
  const { data } = useQuery(["profile"], getProfile);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <header className="shadow sticky top-0 bg-white z-10">
      <div className={navbarStyle}>
        <div
          className={logoDivStyle}
          onClick={() => setIsOpenAdminModal(false)}
        >
          <Link to="/" className={logoStyle}>
            <DivarIcon />
          </Link>
          <span className={borderStyle}></span>
          <span className={locationStyle}>
            <LocationIcon />
            <p>تهران</p>
          </span>

          <Search />
        </div>

        <div className={buttonsDivStyle}>
          <button
            onClick={() =>
              !data ? openModal() : setIsOpenAdminModal(() => !isOpenAdminModal)
            }
          >
            <span
              className={
                isOpenAdminModal ? loginButtonActiveStyle : loginButtonStyle
              }
            >
              <UserIcon />
              <p>دیوار من</p>
            </span>
          </button>
          <button
            onClick={() =>
              data
                ? navigate("/dashboard") || setIsOpenAdminModal(false)
                : openModal()
            }
            className={dashboardButtonStyle}
          >
            ثبت آگهی
          </button>
          <AdminPageModal
            isOpenAdminModal={isOpenAdminModal}
            setIsOpenAdminModal={setIsOpenAdminModal}
          />
        </div>

        <AuthModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </header>
  );
}

export default Header;
