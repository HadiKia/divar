import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";
import RenderIcon from "components/RenderIcon";

// styles
import { h3Style } from "styles/categoryFormStyle";

function Sidebar() {
  const { data } = useQuery(["get-categories"], getCategory);

  return (
    <div>
      <h3 className={h3Style}>دسته بندی ها</h3>
      <ul>
        {data?.data.map((category) => (
          <li key={category._id}>
            <RenderIcon iconName={category.icon} />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
