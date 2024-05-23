import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="tp-footer-area">
      <div className="tp-footer-top pt-110 pb-55">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50">
              <div
                className="tp-footer-widget footer-cols-1 transition-3 wow fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                <div className="tp-footer-logo">
                  <div>
                    <a href="">
                      <div className="logo"></div>
                    </a>
                  </div>
                </div>
                <div className="tp-footer-text">
                  <p>contact@mmsolutions.co.in</p>
                  <p>sales@mmrsolutions.co.in</p>
                </div>
                <div className="tp-footer-social">
                  <Link to={"/"}>
                    <i className="flaticon-facebook-circular-logo"></i>
                  </Link>
                  <Link to={"/"}>
                    <i className="flaticon-instagram"></i>
                  </Link>
                  <Link to={"/"}>
                    <i className="flaticon-whatsapp"></i>
                  </Link>
                  <Link to={"/"}>
                    <i className="flaticon-pinterest-logo "></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 ">
              <div
                className="tp-footer-widget footer-cols-2 tp-footer-widget-cutm-pdg-2 pl-55 transition-3 wow fadeInUp"
                data-wow-delay=".5s"
                data-wow-duration="1s"
              >
                <div className="tp-footer-list ">
                  <ul>
                    <li>
                      <Link
                        to={"/"}
                        onClick={() =>
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          })
                        }
                      >
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={"/about"}
                        onClick={() =>
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          })
                        }
                      >
                        About Us
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={"/services"}
                        onClick={() =>
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          })
                        }
                      >
                        Our Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 mb-50">
              <div
                className="tp-footer-widget footer-cols-3 transition-3 wow fadeInUp"
                data-wow-delay=".7s"
                data-wow-duration="1s"
              >
                <div className="tp-footer-list">
                  <ul>
                    <li>
                      <Link
                        to={"/portfolio"}
                        onClick={() =>
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          })
                        }
                      >
                        Portfolio
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={"/contact"}
                        onClick={() =>
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          })
                        }
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6 mb-50">
              <div
                className="tp-footer-widget footer-cols-4 pl-70 tp-footer-widget-cutm-pdg transition-3 wow fadeInUp"
                data-wow-delay=".9s"
                data-wow-duration="1s"
              >
                <div className="tp-footer-thumb-wrap">
                  <p className="tp-footer-parag">
                    Get Special Offers. We Never Spam.
                  </p>
                  <div className="tp-footer-widget-content-input">
                    <form
                      className="tp-footer-form"
                      action="https://html.hixstudio.net/techub-prev/techub/index.html"
                    >
                      <input type="email" placeholder="Your Email" />
                      <span className="tp-footer-email">
                        <i className="fal fa-envelope"></i>
                      </span>
                      <button type="submit" className="tp-footer-subscribe-btn">
                        Subscribe Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
