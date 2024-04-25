import Footer from "layouts/Footer";
import Header from "layouts/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="md:min-h-[calc(100vh_-_100px)]"> {children}</div>
      <Footer />
    </>
  );
}

export default Layout;
