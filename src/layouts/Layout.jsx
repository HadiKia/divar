import Footer from "layouts/Footer";
import Header from "layouts/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div> {children}</div>
      <Footer />
    </>
  );
}

export default Layout;
