import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";

import UserTickIcon from "assets/icons/UserTickIcon";
import UserIcon from "assets/icons/UserIcon";
import LogOutIcon from "assets/icons/LogOutIcon";

const dialogPanelStyle = "absolute top-0 left-0 right-0 bottom-[56px] bg-white";
const navBarStyle = "p-4 border-b md:hidden";
const pStyle = "font-medium text-lg";
const containerStyle = "p-4 flex flex-col items-start ";
const itemStyle = "flex items-center text-dark w-full text-sm border-b ";
const linkStyle = "pt-3 pb-2.5 my-0.5 md:pt-2 md:pb-1.5 flex-1 pr-1";
const buttonStyle =
  "pt-3 pb-2.5 my-0.5 md:pt-2 md:pb-1.5 flex-1 pr-1 text-right ";

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
    <div className="absolute">
      <Dialog
        open={isOpenAdminModal}
        onClose={() => setIsOpenAdminModal(false)}
        className=""
      >
        <Dialog.Panel className={dialogPanelStyle}>
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
              className={`${itemStyle} text-primary md:pb-1.5 md:border-none `}
            >
              <span>
                <LogOutIcon />
              </span>
              <span className={buttonStyle}>خروج</span>
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}

export default AdminPageModal;
