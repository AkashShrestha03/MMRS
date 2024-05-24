import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ReactWOW from "react-wow";


const Header = () => {
  const [openNav, setOpenNav] = useState(false)
  
  return (
    <>
      {openNav && (
        <>
          <div className="tpoffcanvas-area   ">
            <div className="tpoffcanvas ">
              <div className="tpoffcanvas__close-btn">
                <button className="close-btn" onClick={() => setOpenNav(false)}>
                  <i className="fal fa-times"></i>
                </button>
              </div>
              <Link to={"/"} onClick={() => setOpenNav(false)}>
                <div className="logo"></div>
              </Link>
              <div className="tp-main-menu-mobile d-xl-none  ">
                <ul>
                  <li onClick={() => setOpenNav(false)}>
                    <NavLink
                      to={"/"}
                      className="color-active"
                      onClick={() =>
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        })
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li onClick={() => setOpenNav(false)}>
                    <NavLink
                      to={"about"}
                      onClick={() =>
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        })
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li onClick={() => setOpenNav(false)}>
                    <NavLink
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
                    </NavLink>
                  </li>
                  <li onClick={() => setOpenNav(false)}>
                    <NavLink
                      to={"/services"}
                      onClick={() =>
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        })
                      }
                    >
                      Services
                    </NavLink>
                  </li>

                  <li onClick={() => setOpenNav(false)}>
                    <NavLink
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
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="tpoffcanvas__contact-info">
                <div className="tpoffcanvas__contact-title">
                  <h5>Contact us</h5>
                </div>
                <ul>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:contact@mmsolutions.co.in">
                      <span className="__cf_email__">
                        contact@mmsolutions.co.in
                      </span>
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone-flip"></i>
                    <a href="tel:+918700125888"> +(91) 870 0125 888</a>
                  </li>
                </ul>
              </div>

              <div className="tpoffcanvas__social">
                <div className="social-icon">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <header className="tp-header-height">
        <div id="header-sticky" className="tp-header-bottom">
          <div className="tp-header-area">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-4 col-md-4 col-6">
                  <Link to={"/"}>
                    <div className="logo"></div>
                  </Link>
                </div>
                <div className="col-xl-6 d-none d-xl-block">
                  <div className="main-menu  main-menu-5">
                    <nav className="tp-main-menu-content ">
                      <ul>
                        <li>
                          <NavLink
                            to={"/"}
                            className="color-active"
                            onClick={() =>
                              window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                              })
                            }
                          >
                            Home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={"about"}
                            onClick={() =>
                              window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                              })
                            }
                          >
                            About Us
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
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
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={"/services"}
                            onClick={() =>
                              window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                              })
                            }
                          >
                            Services
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
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
                          </NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-8 col-md-8 col-6">
                  <div className="tp-header-right d-flex justify-content-end align-items-center">
                    <div className="tp-header-button d-none d-lg-block">
                      <Link
                        to={"/contact"}
                        onClick={() =>
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          })
                        }
                        className="tp-header-btn"
                      >
                        <span>Get a Quote</span>
                      </Link>
                    </div>
                    <div className="tp-header-menu-ber">
                      <button
                        className="d-xl-none tp-header-5-bar tp-menu-bar"
                        onClick={() => setOpenNav(true)}
                      >
                        <i className="fa-solid fa-bars"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
