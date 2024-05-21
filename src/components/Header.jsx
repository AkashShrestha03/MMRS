import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header className="tp-header-height bg-white">
      <div id="header-sticky" className="tp-header-bottom">
        <div className="tp-header-area">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-4 col-md-4 col-6">
                <div className=" ">
                  <a href="">
                    <div className="logo"></div>
                  </a>
                </div>
              </div>
              <div className="col-xl-6 d-none d-xl-block">
                <div className="main-menu">
                  <nav className="tp-main-menu-content">
                    <ul>
                      <li className="has-dropdown">
                        <NavLink to={""} className="color-active" href="index-2.html">
                          Home
                        </NavLink>
                        
                      </li>
                      <li className="has-dropdown">
                        <NavLink to={"about"}>About Us</NavLink>
                       
                      </li>
                      <li className="has-dropdown">
                        <NavLink to={"/portfolio"}>Portfolio</NavLink>
                        
                      </li>
                      <li className="has-dropdown">
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
