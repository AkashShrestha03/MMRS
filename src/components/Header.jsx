import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div class="tpoffcanvas-area">
        <div class="tpoffcanvas">
          <div class="tpoffcanvas__close-btn">
            <button class="close-btn">
              <i class="fal fa-times"></i>
            </button>
          </div>
          <div className="logo"></div>
          <div class="tpoffcanvas__title">
            <p>
              Techub is the partner of choice for many of the world’s leading
              enterprises. We help businesses development.
            </p>
          </div>
          <div class="tp-main-menu-mobile d-xl-none ">
            <ul>
              <li>
                <NavLink to={""} className="color-active" href="index-2.html">
                  Home
                </NavLink>
              </li>
              <li className="has-dropdown">
                <NavLink to={"about"}>About Us</NavLink>
              </li>
              <li>
                <NavLink to={"/portfolio"}>Portfolio</NavLink>
              </li>
              <li>
                <NavLink to={"/services"}>Services</NavLink>
              </li>

              <li>
                <NavLink to={"/contact"}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div class="tpoffcanvas__contact-info">
            <div class="tpoffcanvas__contact-title">
              <h5>Contact us</h5>
            </div>
            <ul>
              <li>
                <i class="fas fa-envelope"></i>
                <a href="mailto:techubinfo@mail.com">
                  <span class="__cf_email__">contact@mmsolutions.co.in</span>
                </a>
              </li>
              <li>
                <i class="fa-solid fa-phone-flip"></i>
                <a href="tel:+48555223224"> +(91) 870 0125 888</a>
              </li>
            </ul>
          </div>
          <div class="tpoffcanvas__input">
            <div class="tpoffcanvas__input-title">
              <h4>Get Update</h4>
            </div>
            <form action="#">
              <div class="p-relative">
                <input type="text" placeholder="Enter mail" />
                <button>
                  <i class="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
          <div class="tpoffcanvas__social">
            <div class="social-icon">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="body-overlay"></div>

      <header className="tp-header-height">
        <div id="header-sticky" className="tp-header-bottom">
          <div className="tp-header-area">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-4 col-md-4 col-6">
                  <div className="logo"></div>
                </div>
                <div className="col-xl-6 d-none d-xl-block">
                  <div className="main-menu  main-menu-5">
                    <nav className="tp-main-menu-content ">
                      <ul>
                        <li>
                          <NavLink
                            to={""}
                            className="color-active"
                            href="index-2.html"
                          >
                            Home
                          </NavLink>
                        </li>
                        <li className="has-dropdown">
                          <NavLink to={"about"}>About Us</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/portfolio"}>Portfolio</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/services"}>Services</NavLink>
                        </li>

                        <li>
                          <NavLink to={"/contact"}>Contact Us</NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-8 col-md-8 col-6">
                  <div className="tp-header-right d-flex justify-content-end align-items-center">
                    <div className="tp-header-button d-none d-lg-block">
                      <a
                        className="tp-header-btn"
    
                      >
                        <span>
                          <Link to={"/contact"}>Get a Quote</Link>
                        </span>
                      </a>
                    </div>
                    <div class="tp-header-menu-ber">
                      <button class="d-xl-none tp-header-5-bar tp-menu-bar">
                        <i class="fa-solid fa-bars"></i>
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
