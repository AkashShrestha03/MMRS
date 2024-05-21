import { Link } from "react-router-dom";
import Partners from "../components/Partners";
import RecentWorks from "../components/RecentWorks";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <main className="bg-white">
      <section className="tp-slider-5-area p-relative z-index-1 fix">
        <div className="tp-slider-5-height">
          <div className="tp-slider-5-bg"></div>
          <div className="container">
            <div className="row align-items-end">
              <div className="col-xl-6 col-lg-6">
                <div className="tp-slider-5-content p-relative z-index-11">
                  <div
                    className="tp-slider-5-title-box mb-50 wow fadeInUp"
                    data-wow-delay=".3s"
                    data-wow-duration="1s"
                  >
                    <span className="tp-slider-sub-title tp-slider-sub-title-5">
                      Where affordability meets quality
                    </span>
                    <h1 className="tp-slider-title tp-slider-title-5">
                      Your Partner <br />
                      In
                      <span className="ms-4">Growth </span>
                      <br />
                      And Scale
                    </h1>
                    <p className="tp-slider-5-paragraph">
                      Elevating Individuals And Businesses Through Technology
                     <br /> And Strategy At Affordable Solutions
                    </p>
                  </div>
                  <div
                    className="tp-slider-5-btn-box d-inline-flex wow fadeInUp"
                    data-wow-delay=".5s"
                    data-wow-duration="1s"
                  >
                    <a
                      className="tp-btn"
                      rel="noreferrer"
                      href="contact.html"
                      target="_blank"
                    >
                      <span>Get Started</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tp-slider-5-thumb p-relative z-index-1">
                  <img
                    className="tp-slider-5-main-img"
                    src="../img/slider/shape/slider-5-man1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-slider-5-bg-shape">
          <img
            className="tp-slider-5-bg-shape1"
            src="../img/slider/shape/slider-5-shape2.png"
            alt=""
          />
        </div>
      </section>

      <section className="tp-service-5-area pt-190 pb-90 p-relative fix" id="services">
        <div className="container">
          <div className="row">
            <div className="tp-section-5-title-wrapper mb-50 text-center wow fadeInUp">
             
              <h3 className="tp-section-5-title">
                Services
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div
                className="tp-service-5-wrapper mb-30 wow fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                <div className="tp-service-5-item d-flex">
                  <div className="tp-service-5-thumb">
                    <img src="../img/service/service-5-img1.png" alt="" />
                  </div>
                  <div className="tp-service-5-content">
                    <h4 className="tp-service-5-title">
                      <a href="service-details.html">Technology And Engineering</a>
                    </h4>
                    <p className="tp-service-5-paragraph">
                      System is a term used to refer to an zed collection and to
                     
                    </p>
                    <div className="tp-service-5-btn">
                      <a href="service-details.html">
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="tp-service-5-wrapper mb-30 wow fadeInUp"
                data-wow-delay=".5s"
                data-wow-duration="1s"
              >
                <div className="tp-service-5-item d-flex">
                  <div className="tp-service-5-thumb">
                    <img src="../img/service/service-5-img2.png" alt="" />
                  </div>
                  <div className="tp-service-5-content">
                    <h4 className="tp-service-5-title">
                      <a href="service-details.html">Creative Design Lab</a>
                    </h4>
                    <p className="tp-service-5-paragraph">
                      System is a term used to refer to an zed collection and to
                      symbols pro that may be used to oper
                    </p>
                    <div className="tp-service-5-btn">
                      <a href="service-details.html">
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="tp-service-5-wrapper mb-30 wow fadeInUp"
                data-wow-delay=".7s"
                data-wow-duration="1s"
              >
                <div className="tp-service-5-item d-flex">
                  <div className="tp-service-5-thumb">
                    <img src="../img/service/service-5-img3.png" alt="" />
                  </div>
                  <div className="tp-service-5-content">
                    <h4 className="tp-service-5-title">
                      <a href="service-details.html">Research And Academia</a>
                    </h4>
                    <p className="tp-service-5-paragraph">
                      System is a term used to refer to an zed collection and to
                     
                    </p>
                    <div className="tp-service-5-btn">
                      <a href="service-details.html">
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 ">
              <div
                className="tp-service-5-wrapper mb-30 wow fadeInUp "
                data-wow-delay=".9s"
                data-wow-duration="1s"
              >
                <div className="tp-service-5-item d-flex ">
                  <div className="tp-service-5-thumb">
                    <img src="../img/service/service-5-img4.png" alt="" />
                  </div>
                  <div className="tp-service-5-content">
                    <h4 className="tp-service-5-title">
                      <a href="service-details.html">Digital Marketing</a>
                    </h4>
                    <p className="tp-service-5-paragraph">
                      System is a term used to refer to an zed collection and to
                      symbols pro that may be used to oper
                    </p>
                    <div className="tp-service-5-btn">
                      <a href="service-details.html">
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-service-5-bg-shape">
          <img src="../img/service/service-5-bg-shape.png" alt="" />
        </div>
      </section>

      {/* Recent work section slider */}

      <RecentWorks />

      <section className="tp-management-5-area p-relative fix pb-100 mb-110">
        <div className="tp-management-5-bg-shape">
          <img
            className="tp-management-5-bg-shape-1"
            src="../img/management/management-5-bg-shape1.png"
            alt=""
          />
          <img
            className="tp-management-5-bg-shape-2"
            src="../img/management/management-5-bg-shape2.png"
            alt=""
          />
          <img
            className="tp-management-5-bg-shape-3"
            src="../img/management/management-5-bg-shape3.png"
            alt=""
          />
          <img
            className="tp-management-5-bg-shape-4"
            src="../img/management/management-5-bg-shape4.png"
            alt=""
          />
          <img
            className="tp-management-5-bg-shape-5"
            src="../img/management/management-5-bg-shape5.png"
            alt=""
          />
          <img
            className="tp-management-5-bg-shape-6"
            src="../img/management/management-5-bg-shape6.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-management-5-wrapper wow fadeInUp">
                <div className="tp-section-5-title-wrapper mb-50">
                  <span className="tp-section-subtitle">MMR Management</span>
                  <h3 className="tp-section-5-title management-5">
                    Your partner for <br />
                    software <span>Innovation</span>
                  </h3>
                  <p className="tp-section-5-pagagraph">
                    MMR Solutions is the partner of choice for many of the
                    world’s leading and enterprises and technology challengers.
                    We help businesses top elevate their value through custom
                  </p>
                </div>
                <div className="tp-management-progres-skill tp-management-progres-skill-2 mb-35 mr-60">
                  <div className="tp-skill fix pb-20">
                    <label>Design</label>
                    <div className="progress progress-2">
                      <div
                        className="progress-bar progress-bar-2 wow slideInLeft"
                        data-wow-duration="1s"
                        data-wow-delay=".8s"
                        role="progressbar"
                        aria-label="Example with label"
                        style={{ width: "85%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progresscounter">85%</span>
                      </div>
                    </div>
                  </div>
                  <div className="tp-skill fix pb-20">
                    <label>Development</label>
                    <div className="progress progress-2">
                      <div
                        className="progress-bar progress-bar-2 wow slideInLeft"
                        data-wow-duration="1s"
                        data-wow-delay=".8s"
                        role="progressbar"
                        aria-label="Example with label"
                        style={{ width: "90%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progresscounter">90%</span>
                      </div>
                    </div>
                  </div>
                  <div className="tp-skill fix pb-20">
                    <label>Data optimization</label>
                    <div className="progress progress-2">
                      <div
                        className="progress-bar progress-bar-2 wow slideInLeft"
                        data-wow-duration="1s"
                        data-wow-delay=".8s"
                        role="progressbar"
                        aria-label="Example with label"
                        style={{ width: "90%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progresscounter">90%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-management-5-thumb wow fadeInUp">
                <img src="../img/management/management-5-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}

      <Testimonials />

      {/* Partners */}

      <Partners />

      {/* Contact Us */}

      <section className="tp-chose-us-5-area pt-115 pb-130 p-relative">
        <div className="tp-chose-us-5-bg-shape">
          <img
            className="tp-chose-us-5-bg-shape1"
            src="../img/chose-us/chose-us-5-shape1.png"
            alt=""
          />
          <img
            className="tp-chose-us-5-bg-shape2"
            src="../img/chose-us/chose-us-5-shape2.png"
            alt=""
          />
          <img
            className="tp-chose-us-5-bg-shape3"
            src="../img/chose-us/chose-us-5-shape3.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="tp-chose-us-5-wrapper text-center wow fadeInUp">
              <h2 className="tp-chose-us-5-title">
                Do you have any projects? <br />
                Contact us.
              </h2>
              <div className="tp-chose-us-5-btn">
                <Link
                  className="tp-btn"
                  rel="noreferrer"
                  to={"/contact"}
                  target="_blank"
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
