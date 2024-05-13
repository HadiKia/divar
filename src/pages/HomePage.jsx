import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";
import { useTitle } from "hooks/useTitle";

import { containerStyle, sideBarDivStyle } from "styles/homePageStyle";

function HomePage() {
  useTitle("دیوار:‌ مرجع انواع نیازمندی و آگهی‌های نو و دست دو");

  return (
    <div className={containerStyle}>
      <div className={sideBarDivStyle}>
        <Sidebar />
      </div>
      <Main />
    </div>
  );
}

export default HomePage;
