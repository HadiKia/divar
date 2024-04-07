import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";
import { RadioGroup } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import AuthModal from "components/AuthModal";

import DivarIcon from "assets/icons/DivarIcon";
import UserIcon from "assets/icons/UserIcon";
import MenuIcon from "assets/icons/MenuIcon";
import AddIcon from "assets/icons/AddIcon";

// styles
import {
  footerStyle,
  LinksDivStyle,
  logoStyle,
  LinkStyle,
  borderStyle,
  pStyle,
  aStyle,
  radioGroupStyle,
  InActiveStyle,
  activeStyle,
} from "styles/footerStyle";

function Footer() {
  const url = window.location.href.split("/")[3];
  let [isActive, setIsActive] = useState(url);
  const { data } = useQuery(["profile"], getProfile);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <footer className={footerStyle}>
      <div className={LinksDivStyle}>
        <Link to="/" className={logoStyle}>
          <DivarIcon />
        </Link>
        <span className={LinkStyle}>دربارهٔ دیوار</span>
        <span className={borderStyle}></span>
        <span className={LinkStyle}>پشتیبانی و قوانین</span>
        <span className={borderStyle}></span>
        <span className={LinkStyle}>اتاق خبر</span>
        <span className={borderStyle}></span>
        <span className={LinkStyle}>دریافت برنامه</span>
        <span className={borderStyle}></span>
        <span className={LinkStyle}>تماس با پشتیبانی</span>
      </div>

      <p dir="ltr" className={pStyle}>
        Developed by
        <a href="https://github.com/HadiKia" target="_blank" className={aStyle}>
          Hadi Kia
        </a>
        with 🖤
      </p>

      <div className="md:hidden">
        <RadioGroup
          value={isActive}
          onChange={setIsActive}
          className={radioGroupStyle}
        >
          <RadioGroup.Option value="">
            {({ checked }) => (
              <span
                className={checked && url === "" ? activeStyle : InActiveStyle}
                onClick={() => navigate("/")}
              >
                <span className="scale-90">
                  <DivarIcon />
                </span>
                <p>آگهی‌ها</p>
              </span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="category">
            {({ checked }) => (
              <span
                className={checked ? activeStyle : InActiveStyle}
                onClick={() => navigate("/")}
              >
                <MenuIcon />
                <p>دسته‌ها</p>
              </span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="auth">
            {({ checked }) => (
              <span
                className={
                  checked && url === "dashboard" ? activeStyle : InActiveStyle
                }
                onClick={() => (data ? navigate("/dashboard") : openModal())}
              >
                <AddIcon />
                <p>ثبت آگهی</p>
              </span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="dashboard">
            {({ checked }) => (
              <span
                className={
                  checked && url === "dashboard" ? activeStyle : InActiveStyle
                }
                onClick={() => (data ? navigate("/dashboard") : openModal())}
              >
                <span className="scale-110">
                  <UserIcon />
                </span>
                <p>دیوار من</p>
              </span>
            )}
          </RadioGroup.Option>
        </RadioGroup>
      </div>

      <AuthModal
        isOpen={isOpen}
        closeModal={closeModal}
        setIsActive={setIsActive}
      />
    </footer>
  );
}

export default Footer;
