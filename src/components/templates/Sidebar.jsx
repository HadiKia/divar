import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";
import Loader from "components/Loader";

import CloseIcon from "assets/icons/CloseIcon";
import RenderIcon from "components/RenderIcon";

// styles
import { h3Style } from "styles/categoryFormStyle";
import {
  titleDivStyle,
  ulStyle,
  liStyle,
  iconStyle,
  nameStyle,
} from "styles/sidebarStyle";
import { modalTitleStyle } from "styles/Send&CheckOtpFormStyle";
import ArrowLeft from "assets/icons/ArrowLeft";

function Sidebar({ closeCategory, setIsActive }) {
  const { data, isLoading } = useQuery(["get-categories"], getCategory);

  return (
    <>
      <div className={titleDivStyle}>
        <p className={modalTitleStyle}>انتخاب دسته بندی</p>
        <span
          className="text-secondary"
          onClick={() => {
            closeCategory();
            setIsActive("");
          }}
        >
          <CloseIcon />
        </span>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3 className={`${h3Style} hidden md:block`}>دسته بندی ها</h3>
          <ul className={ulStyle}>
            {data.data.map((category) => (
              <li key={category._id} className={liStyle}>
                <div className="flex items-center gap-x-1">
                  <span className={iconStyle}>
                    <RenderIcon iconName={category.icon} />
                  </span>
                  <p className={nameStyle}>{category.name}</p>
                </div>
                <span className="md:hidden">
                  <ArrowLeft />
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default Sidebar;
