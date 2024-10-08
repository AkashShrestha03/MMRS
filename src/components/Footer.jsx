import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";

const Footer = () => {
  return (
    <section className="tp-footer-area">
      <div className="tp-footer-top pt-110 pb-55">
        <div className="container ">
          <div className="row">
            <div className="col-xl-3  col-lg-3 col-md-6 col-sm-6 mb-30">
              <ReactWOW animation="fadeInUp" delay="0.3s" duration="1s">
                <div className="tp-footer-widget footer-cols-1 transition-3 ">
                  <div className="tp-footer-logo">
                    <div>
                      <Link to={"/"}>
                        <div className="logo"></div>
                      </Link>
                    </div>
                  </div>
                  <div className="tp-footer-text">
                    <p>contact@mmsolutions.co.in</p>
                    <p>sales@mmrsolutions.co.in</p>
                  </div>
                  <div className="tp-footer-social">
                    <Link
                      to={
                        "https://www.facebook.com/profile.php?id=100092450942528&mibextid=ZbWKwL"
                      }
                    >
                      <i className="flaticon-facebook-circular-logo"></i>
                    </Link>
                    <Link
                      to={
                        "https://www.instagram.com/devloop_pvt_ltd?igsh=MW4zOHY2bHU2cnR4Nw=="
                      }
                    >
                      <i className="flaticon-instagram"></i>
                    </Link>

                    <Link to={"https://wa.me/message/J4BMFHXTGKQLL1"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-whatsapp mb-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ReactWOW>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
              <ReactWOW animation="fadeInUp" delay="0.5s" duration="1s">
                <div className="tp-footer-widget footer-cols-2 tp-footer-widget-cutm-pdg-2  transition-3  ">
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
              </ReactWOW>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6  col-sm-6 mb-30">
              <ReactWOW animation="fadeInUp" delay="0.7s" duration="1s">
                <div className="tp-footer-widget footer-cols-3 transition-3  ">
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
              </ReactWOW>
            </div>
            <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6 mb-50">
              {/* <ReactWOW animation="fadeInUp" delay="0.9s" duration="1s">
                <div className="tp-footer-widget footer-cols-4 tp-footer-widget-cutm-pdg transition-3">
                  <div className="tp-footer-thumb-wrap">
                    <p className="tp-footer-parag">
                      Get in touch with us.
                    </p>
                    <div className="tp-footer-widget-content-input">
                      <form className="tp-footer-form">
                        <input
                          type="email"
                          className="w-100"
                          placeholder="Your Email"
                        />
                        <span className="tp-footer-email">
                          <i className="fal fa-envelope"></i>
                        </span>
                        <button
                          type="submit"
                          className="tp-footer-subscribe-btn w-100"
                        >
                          Contact Now
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </ReactWOW> */}
              <div class="tp-footer-5-bg-shape ">
                <img
                  class="tp-footer-5-bg-shape1 "
                  src="../img/footer/Online.gif"
                  alt=""

                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
