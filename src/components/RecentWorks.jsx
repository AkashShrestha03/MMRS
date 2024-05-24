import { Link } from "react-router-dom";
import ReactWOW from "react-wow";

const RecentWorks = () => {
  return (
    <section className="tp-project-5-area pt-60 pb-120 p-relative fix">
      <div className="tp-project-5-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-8">
              <ReactWOW animation="fadeInUp">
                <div className="tp-section-5-title-wrapper mb-50">
                  <h3 className="tp-section-5-title project-5">
                    Check some of <br />
                    Our Recent <span>Works</span>
                  </h3>
                  <p className="tp-project-5-top-para">
                    Click the button to check all of our works
                  </p>
                </div>
              </ReactWOW>
            </div>
            <div className="col-xl-6 col-lg-4 col-md-4">
              <ReactWOW animation="fadeInUp">
                <div className="tp-project-5-top-btn d-flex justify-content-end mt-100 wow fadeInUp">
                  <Link
                    className="tp-btn"
                    onClick={() =>
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      })
                    }
                    to={"/portfolio"}
                  >
                    <span>View all Works</span>
                  </Link>
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-project-5-bottom">
        <div className="container-fluid tp-project-5-width">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <ReactWOW animation="fadeInUp">
                <div
                  className="tp-project-5-wrapper wow fadeInUp"
                  data-wow-delay=".3s"
                  data-wow-duration="1s"
                >
                  <div className="tp-project-5-thumb p-relative">
                    <img src="../img/project/project-5-img1.jpg" alt="" />
                    <div className="tp-project-5-icon">
                      <a href="portfolio-details.html">
                        <i className="fa-thin fa-plus"></i>
                      </a>
                    </div>
                    <div className="tp-project-5-content text-center">
                      <span>Building</span>
                      <h4 className="tp-project-5-title">
                        <a href="portfolio-details.html">Social media app</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </ReactWOW>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <ReactWOW animation="fadeInUp" delay="0.5s" duration="1s">
                <div className="tp-project-5-wrapper ">
                  <div className="tp-project-5-thumb p-relative">
                    <img src="../img/project/project-5-img2.jpg" alt="" />
                    <div className="tp-project-5-icon">
                      <a href="portfolio-details.html">
                        <i className="fa-thin fa-plus"></i>
                      </a>
                    </div>
                    <div className="tp-project-5-content text-center">
                      <span>Building</span>
                      <h4 className="tp-project-5-title">
                        <a href="portfolio-details.html">Network Security</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </ReactWOW>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <ReactWOW animation="fadeInUp" delay="0.7s" duration="1s">
                <div className="tp-project-5-wrapper">
                  <div className="tp-project-5-thumb p-relative">
                    <img src="../img/project/project-5-img3.jpg" alt="" />
                    <div className="tp-project-5-icon">
                      <a href="portfolio-details.html">
                        <i className="fa-thin fa-plus"></i>
                      </a>
                    </div>
                    <div className="tp-project-5-content text-center">
                      <span>Building</span>
                      <h4 className="tp-project-5-title">
                        <a href="portfolio-details.html">
                          Platform Integration
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </ReactWOW>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <ReactWOW animation="fadeInUp" delay="0.9s" duration="1s">
                <div
                  className="tp-project-5-wrapper"
                 
                >
                  <div className="tp-project-5-thumb p-relative">
                    <img src="../img/project/project-5-img4.jpg" alt="" />
                    <div className="tp-project-5-icon">
                      <a href="portfolio-details.html">
                        <i className="fa-thin fa-plus"></i>
                      </a>
                    </div>
                    <div className="tp-project-5-content text-center">
                      <span>Building</span>
                      <h4 className="tp-project-5-title">
                        <a href="portfolio-details.html">IT Management</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-project-5-bg-shape">
        <img src="../img/project/project-5-bg-shape.png" alt="" />
      </div>
    </section>
  );
};

export default RecentWorks;
