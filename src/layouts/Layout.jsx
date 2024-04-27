import Footer from "layouts/Footer";
import Header from "layouts/Header";
import { useState } from "react";

function Layout({ children }) {
  const [isOpenAdminModal, setIsOpenAdminModal] = useState(false);
  return (
    <>
      <Header
        isOpenAdminModal={isOpenAdminModal}
        setIsOpenAdminModal={setIsOpenAdminModal}
      />
      <div className="md:min-h-[calc(100vh_-_100px)]"> {children}</div>
      <Footer
        isOpenAdminModal={isOpenAdminModal}
        setIsOpenAdminModal={setIsOpenAdminModal}
      />
    </>
  );
}

export default Layout;
