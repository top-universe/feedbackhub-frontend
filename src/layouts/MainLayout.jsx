import PropTypes from "prop-types";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const MainLayout = ({ children }) => {
  return (
    <section className="w-full">
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element
}

export default MainLayout;
