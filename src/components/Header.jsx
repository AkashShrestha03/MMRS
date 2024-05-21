import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header class="tp-header-height">
      <div id="header-sticky" class="tp-header-bottom">
        <div class="tp-header-area">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-4 col-md-4 col-6">
                <div class=" ">
                  <a href="">
                    <div className="logo "></div>
                  </a>
                </div>
              </div>
              <div class="col-xl-6 d-none d-xl-block">
                <div class="main-menu">
                  <nav class="tp-main-menu-content">
                    <ul>
                      <li class="has-dropdown">
                        <NavLink to={""} class="color-active" href="index-2.html">
                          Home
                        </NavLink>
                        
                      </li>
                      <li class="has-dropdown">
                        <NavLink to={"about"}>About Us</NavLink>
                       
                      </li>
                      <li class="has-dropdown">
                        <a href="service.html">Portfolio</a>
                        <ul class="submenu tp-submenu">
                          <li>
                            <a href="service.html">Our Service</a>
                          </li>
                          <li>
                            <a href="service-details.html">Service Details</a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-dropdown">
                        <a href="blog.html">Services</a>
                        <ul class="submenu tp-submenu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-sideber.html">Blog Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <NavLink to={"/contact"}>Contact Us</NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-xl-4 col-lg-8 col-md-8 col-6">
                <div class="tp-header-right d-flex justify-content-end align-items-center">
                  <div class="tp-header-button d-none d-lg-block">
                    <a
                      class="tp-header-btn"
                      rel="noreferrer"
                      href="contact.html"
                      target="_blank"
                    >
                      <span>Get a Quote</span>
                    </a>
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
