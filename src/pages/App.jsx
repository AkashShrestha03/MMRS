// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/animate.css";
import "../assets/css/bootstrap.css";
import "../assets/css/flaticon.css";
import "../assets/css/font-awesome-pro.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/main.css";
import "../assets/css/slick.css";
import "../assets/css/spacing.css";
import "../assets/css/swiper-bundle.css";
import "../index.css";




//Scripts
import "bootstrap/dist/js/bootstrap.bundle";
import "../assets/js/ajax-form";
import "../assets/js/imagesloaded-pkgd";


import "../assets/js/magnific-popup";
import "../assets/js/main";
import "../assets/js/nice-select";
import "../assets/js/purecounter";
import "../assets/js/range-slider";
import "../assets/js/swiper-bundle";
import "../assets/js/wow";
import "../assets/js/vendor/jquery";
import "../assets/js/vendor/waypoints";

// Components
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom";
import Preloader from "../components/Preloader";

const App = () => {
  return (
    <>
    
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
