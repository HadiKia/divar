import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";

import { containerStyle, sideBarDivStyle } from "styles/homePageStyle";

function HomePage() {
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
