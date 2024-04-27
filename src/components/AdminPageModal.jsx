import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";
import { Link } from "react-router-dom";

import UserTickIcon from "assets/icons/UserTickIcon";
import UserIcon from "assets/icons/UserIcon";
import LogOutIcon from "assets/icons/LogOutIcon";

// styles
import {
  dialogPanelStyle,
  navBarStyle,
  pStyle,
  containerStyle,
  itemStyle,
  linkStyle,
  buttonStyle,
} from "styles/adminPageModalStyle";

function AdminPageModal({
  isOpenAdminModal,
  setIsOpenAdminModal,
  setIsActive,
}) {
  const { data, refetch } = useQuery(["profile"], getProfile);

  const logOutHandler = () => {
    document.cookie =
      "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    refetch();
    setIsOpenAdminModal(false);
    if (setIsActive) setIsActive("");
  };

  return (
    <>
      <div className={isOpenAdminModal ? dialogPanelStyle : "hidden"}>
        <div className={navBarStyle}>
          <p className={pStyle}>دیوار من</p>
        </div>
        <div className={containerStyle}>
          {data?.data?.role === "ADMIN" && (
            <div className={itemStyle}>
              <span>
                <UserTickIcon />
              </span>
              <Link
                onClick={() => setIsOpenAdminModal(false)}
                to="/admin"
                className={linkStyle}
              >
                پنل ادمین
              </Link>
            </div>
          )}
          <div className={itemStyle}>
            <span>
              <UserIcon />
            </span>
            <Link
              onClick={() => setIsOpenAdminModal(false)}
              to="/dashboard"
              className={linkStyle}
            >
              داشبورد
            </Link>
          </div>
          <button
            onClick={logOutHandler}
            className={`${itemStyle} !text-primary md:pb-1.5 md:border-none `}
          >
            <span>
              <LogOutIcon />
            </span>
            <span className={buttonStyle}>خروج</span>
          </button>
        </div>
      </div>
      <div
        onClick={() => setIsOpenAdminModal(false)}
        className={isOpenAdminModal ? "fixed inset-0 -z-10" : "hidden"}
      ></div>
    </>
  );
}

export default AdminPageModal;
