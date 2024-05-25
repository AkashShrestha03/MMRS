import { useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import ReactWOW from "react-wow";


const Portfolio = () => {
  const [loader, setLoader] = useState(true);
  return (
    <>
      {setTimeout(() => setLoader(false), 500)}
      {loader && <Preloader></Preloader>}
      <main>
        <section className="tp-portfolio-breadcrumb-area p-relative">
          <div className="tp-portfolio-breadcrumb-bg-shape">
            <img
              className="tp-portfolio-breadcrumb-bg-shape1"
              src="../img/portfolio/porfolio-shape1.png"
              alt=""
            />
            <img
              className="tp-portfolio-breadcrumb-bg-shape2"
              src="../img/portfolio/porfolio-shape2.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="tp-portfolio-breadcrumb-content text-center">
                <h2 className="tp-portfolio-breadcrumb-title">Our Portfolio</h2>
                <p className="tp-portfolio-breadcrumb-body">
                  <span>
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
                      MMR
                    </Link>
                  </span>{" "}
                  <span className="spacing">/</span> PORTFOLIO
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="tp-portfolio-area pt-120 pb-90">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <ReactWOW animation="fadeInUp" delay="0.3s" duration="1s">
                  <div className="tp-project-3-slide-wrapper mb-30  ">
                    <div className="tp-project-3-thumb tp-project-3-thumb-inner p-relative">
                      <img src="../img/project/Portfolio-01.png" alt="" />
                      <div className="tp-project-3-down-content text-center">
                        <span>Solution</span>
                        <h4 className="tp-project-3-down-title">
                          <a>School Management Platform</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </ReactWOW>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <ReactWOW animation="fadeInUp" delay="0.5s" duration="1s">
                  <div className="tp-project-3-slide-wrapper mb-30 ">
                    <div className="tp-project-3-thumb tp-project-3-thumb-inner p-relative">
                      <img src="../img/project/Portfolio-02.png" alt="" />
                      <div className="tp-project-3-down-content text-center">
                        <h4 className="tp-project-3-down-title">
                          <a>Mobile Game UI/UX</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </ReactWOW>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <ReactWOW animation="fadeInUp" delay="0.7s" duration="1s">
                  <div className="tp-project-3-slide-wrapper mb-30 ">
                    <div className="tp-project-3-thumb tp-project-3-thumb-inner p-relative">
                      <img src="../img/project/Portfolio-03.png" alt="" />
                      <div className="tp-project-3-down-content text-center">
                        <h4 className="tp-project-3-down-title">
                          <a>Mobile Game Application Development</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </ReactWOW>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <ReactWOW animation="fadeInUp" delay="0.3s" duration="1s">
                  <div className="tp-project-3-slide-wrapper mb-30  ">
                    <div className="tp-project-3-thumb tp-project-3-thumb-inner p-relative">
                      <img src="../img/project/Portfolio-04.png" alt="" />
                      <div className="tp-project-3-down-content text-center">
                        <span>Solution</span>
                        <h4 className="tp-project-3-down-title">
                          <a>Ed-Tech Application</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </ReactWOW>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <ReactWOW animation="fadeInUp" delay="0.3s" duration="1s">
                  <div className="tp-project-3-slide-wrapper mb-30  ">
                    <div className="tp-project-3-thumb tp-project-3-thumb-inner p-relative">
                      <img src="../img/project/Portfolio-05.png" alt="" />
                      <div className="tp-project-3-down-content text-center">
                        <span>Solution</span>
                        <h4 className="tp-project-3-down-title">
                          <a>Education Consultancy Platform</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </ReactWOW>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <ReactWOW animation="fadeInUp" delay="0.3s" duration="1s">
                  <div className="tp-project-3-slide-wrapper mb-30  ">
                    <div className="tp-project-3-thumb tp-project-3-thumb-inner p-relative">
                      <img src="../img/project/Portfolio-06.png" alt="" />
                      <div className="tp-project-3-down-content text-center">
                        <span>Solution</span>
                        <h4 className="tp-project-3-down-title">
                          <a>CRM Platform</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </ReactWOW>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <ReactWOW animation="fadeInUp" delay="0.3s" duration="1s">
                  <div className="tp-project-3-slide-wrapper mb-30  ">
                    <div className="tp-project-3-thumb tp-project-3-thumb-inner p-relative">
                      <img src="../img/project/Portfolio-07.png" alt="" />
                      <div className="tp-project-3-down-content text-center">
                        <span>Solution</span>
                        <h4 className="tp-project-3-down-title">
                          <a href="portfolio-details.html">Virtual Office Platform</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </ReactWOW>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6">
                <ReactWOW animation="fadeInUp" delay="0.3s" duration="1s">
                  <div className="tp-project-3-slide-wrapper mb-30  ">
                    <div className="tp-project-3-thumb tp-project-3-thumb-inner p-relative">
                      <img src="../img/portfolio/Portfolio-2.png" alt="" />
                      <div className="tp-project-3-down-content text-center">
                        <span>Solution</span>
                        <h4 className="tp-project-3-down-title">
                          <a href="portfolio-details.html">E-Learning App</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </ReactWOW>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <ReactWOW animation="fadeInUp" delay="0.3s" duration="1s">
                  <div className="tp-project-3-slide-wrapper mb-30  ">
                    <div className="tp-project-3-thumb tp-project-3-thumb-inner p-relative">
                      <img src="../img/portfolio/Portfolio-3.png" alt="" />
                      <div className="tp-project-3-down-content text-center">
                        <span>Solution</span>
                        <h4 className="tp-project-3-down-title">
                          <a href="portfolio-details.html">
                            E-Commerce Platform
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </ReactWOW>
              </div>
            </div>
          </div>
        </section>

        <section
          className="tp-portfolio-inner-subscribe-area pt-70 pb-60"
          data-background="assets/img/portfolio/port-subs-inner-bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <ReactWOW animation="fadeInUp">
                  <div className="tp-portfolio-inner-subsc-content wow fadeInUp">
                    <h2 className="tp-portfolio-inner-subsc-title">
                      Start building today
                    </h2>
                    <p className="tp-portfolio-inner-subsc-paragraph">
                      Get in touch to learn how our bankign solution can inrease
                      your business
                    </p>
                  </div>
                </ReactWOW>
              </div>
              <div className="col-xl-6 col-lg-5">
                <ReactWOW animation="fadeInUp">
                  <div className="tp-portfolio-inner-subsc-button d-flex justify-content-end mt-40 ">
                    <Link
                      to={"/contact"}
                      onClick={() =>
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        })
                      }
                      className="tp-btn tp-btn-white"
                    >
                      <span>Get a Quote</span>
                    </Link>
                  </div>
                </ReactWOW>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Portfolio
