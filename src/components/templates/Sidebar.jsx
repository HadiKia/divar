import RenderIcon from "components/RenderIcon";

// styles
import { h3Style } from "styles/categoryFormStyle";
import { ulStyle, liStyle, iconStyle, nameStyle } from "styles/sidebarStyle";

function Sidebar({ categories }) {
  return (
    <>
      <h3 className={h3Style}>دسته بندی ها</h3>
      <ul className={ulStyle}>
        {categories.data.map((category) => (
          <li key={category._id} className={liStyle}>
            <span className={iconStyle}>
              <RenderIcon iconName={category.icon} />
            </span>
            <p className={nameStyle}>{category.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Sidebar;
