import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getProfile } from "services/user";
import { useQuery } from "@tanstack/react-query";
import { Listbox } from "@headlessui/react";
import { provinces } from "constants/cities";
import { useQueryContext } from "hooks/useQueryContext";
import { createQueryObject } from "utils/helpers";

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
  locationContainerStyle,
  locationStyle,
  loginButtonStyle,
  loginButtonActiveStyle,
  logoDivStyle,
  logoStyle,
  navbarStyle,
  listBoxOptionsStyle,
  listBoxButtonStyle,
} from "styles/headerStyle";
import {
  listBoxOptionActiveStyle,
  listBoxOptionStyle,
} from "styles/addPostStyle";

function Header({ isOpenAdminModal, setIsOpenAdminModal }) {
  const location = useLocation();
  const dashboardPage = location.pathname === "/dashboard";
  const adminPage = location.pathname === "/admin";

  const { data } = useQuery(["profile"], getProfile);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <header className="shadow sticky top-0 bg-white z-20">
      <div className={navbarStyle}>
        <div
          className={logoDivStyle}
          onClick={() => setIsOpenAdminModal(false)}
        >
          <Link to="/" className={logoStyle}>
            <DivarIcon />
          </Link>
          {!dashboardPage && !adminPage && (
            <>
              <span className={`hidden md:block ${borderStyle}`}></span>
              <div className={locationContainerStyle}>
                <Search />
                <span className={`md:hidden ${borderStyle}`}></span>
                <div className={locationStyle}>
                  <CitySelection />
                  <LocationIcon />
                </div>
              </div>
            </>
          )}
          {(dashboardPage || adminPage) && (
            <p className="font-medium text-lg md:hidden">
              {location.pathname === "/dashboard" && "داشبورد"}
              {location.pathname === "/admin" && "پنل ادمین"}
            </p>
          )}
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
              <p>
                {(dashboardPage && "داشبورد") ||
                  (adminPage && "پنل ادمین") ||
                  "دیوار من"}
              </p>
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

function CitySelection() {
  const [selectedProvince, setSelectedProvince] = useState(provinces[0]);
  const { query, setQuery } = useQueryContext();

  const modifiedCites = [
    { id: 0, name: "همه استان‌ها", unavailable: false },
    ...provinces,
  ];

  const provinceHandler = (event) => {
    const { tagName } = event.target;
    if (tagName !== "LI") return;

    const city = event.target.innerText;
    setQuery((query) => createQueryObject(query, { city }));
  };

  return (
    <>
      <Listbox value={selectedProvince} onChange={setSelectedProvince}>
        <Listbox.Button className={listBoxButtonStyle}>
          {query.city || "همه استان‌ها"}
        </Listbox.Button>
        <Listbox.Options className={listBoxOptionsStyle}>
          {modifiedCites.map((province, index) => (
            <div key={province.id}>
              <Listbox.Option
                onClick={provinceHandler}
                key={province.id}
                value={province}
                disabled={province.unavailable}
                className={({ active }) =>
                  `${listBoxOptionStyle} ${
                    active ? listBoxOptionActiveStyle : null
                  }`
                }
              >
                {province.name}
              </Listbox.Option>
              {index !== modifiedCites.length - 1 && (
                <hr className="border-[#EDEDED]" />
              )}
            </div>
          ))}
        </Listbox.Options>
      </Listbox>
    </>
  );
}
