import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";
import { useQueryContext } from "hooks/useQueryContext";
import Loader from "components/Loader";

import CloseIcon from "assets/icons/CloseIcon";
import RenderIcon from "components/RenderIcon";

// styles
import {
  titleDivStyle,
  h3Style,
  ulStyle,
  liStyle,
  liActiveStyle,
  iconStyle,
  nameStyle,
} from "styles/sidebarStyle";
import { modalTitleStyle } from "styles/Send&CheckOtpFormStyle";
import { createQueryObject } from "utils/helpers";

function Sidebar({ isOpenCategory, closeCategory, setIsActive }) {
  const { data, isLoading } = useQuery(["get-categories"], getCategory);
  const { query, setQuery } = useQueryContext();

  const categories = data?.data || [];
  const modifiedCategories = [
    { _id: "all", name: "همه", icon: "all" },
    ...categories,
  ];

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    if (tagName !== "P") return;
    const category = event.target.getAttribute("data-id");
    setQuery((query) => createQueryObject(query, { category }));
  };

  const closeCategoryModal = () => {
    if (isOpenCategory) {
      closeCategory();
      setIsActive("");
    }
  };

  return (
    <>
      <div className={titleDivStyle}>
        <p className={modalTitleStyle}>انتخاب دسته بندی</p>
        <span className="text-secondary" onClick={closeCategoryModal}>
          <CloseIcon />
        </span>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3 className={h3Style}>دسته‌ها</h3>
          <ul onClick={categoryHandler} className={ulStyle}>
            {modifiedCategories.map((category) => (
              <li
                key={category._id}
                onClick={closeCategoryModal}
                className={
                category._id === query.category
                    ? liActiveStyle
                    : liStyle
                }
              >
                <span className={iconStyle}>
                  <RenderIcon iconName={category.icon} />
                </span>
                <p data-id={category._id} className={nameStyle}>
                  {category.name}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default Sidebar;
