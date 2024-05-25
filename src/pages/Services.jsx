import { useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import ReactWOW from "react-wow";

const Services = () => {
  const [loader, setLoader] = useState(true);
  return (
    <>
      {setTimeout(() => setLoader(false), 500)}
      {loader && <Preloader></Preloader>}
      <main>
        <section className="tp-portfolio-breadcrumb-area tp-service-inner-breadcrumb-area mb-110">
          <div className="container">
            <div className="row">
              <div className="tp-portfolio-breadcrumb-content">
                <h2 className="tp-portfolio-breadcrumb-title tp-service-breadcrumb-title">
                  Our Service
                </h2>
                <p className="tp-portfolio-breadcrumb-body tp-service-breadcrumb-body">
                  <span>
                    <Link to={"/"}>MMR</Link>
                  </span>{" "}
                  <span className="spacing">/</span> Our Services
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="tp-service-2-area tp-service-inner-main-area tp-service-inner-main-area-2 p-relative fix">
          <div className="container">
            <div className=" row gy-5 gap-4  services-cards d-flex justify-content-center">
              <div className="col-xl-5 col-lg-4 col-md-6  border shadow tp-service-2">
                <ReactWOW animation="fadeInUp">
                  <div
                    className="tp-price-item "
                  
                  >
                    <div className="tp-price-top-box mb-20 d-flex align-items-center ">
                      <span>Technology And Engineering</span>
                      <img
                        src="../img/service/Development.png"
                        height={90}
                        alt=""
                      />
                    </div>

                    <div className="tp-price-list mb-35">
                      <ul>
                        <li>
                          <i className="fa-light fa-badge-check"></i>Mobile
                          Application Development
                        </li>
                        <li>
                          <i className="fa-light fa-badge-check"></i>Website
                          Development
                        </li>
                        <li>
                          <i className="fa-light fa-badge-check"></i>WebApp
                          Development
                        </li>
                        <li >
                          <i className="fa-light fa-badge-check"></i>Software
                          Development 
                        </li>
                        <li>
                          <i className="fa-light fa-badge-check"></i>DevOpps
                        </li>
                      </ul>
                    </div>
                  </div>
                </ReactWOW>
              </div>
              <div className="col-xl-5 col-lg-4 col-md-6  border shadow tp-service-2">
                <ReactWOW animation="fadeInUp" delay="0.3s" duration="1s">
                  <div className="tp-price-item  ">
                    <div className="tp-price-top-box  d-flex align-items-center">
                      <span>Creative Design Lab</span>
                      <span className="tp-btn-top-icon ">
                        <img
                          src="../img/service/Design-1.png"
                          height={90}
                          alt=""
                        />
                      </span>
                    </div>

                    <div className="tp-price-list mb-35">
                      <ul>
                        <li>
                          <i className="fa-light fa-badge-check"></i>UI/UX Designing
                        </li>
                        <li>
                          <i className="fa-light fa-badge-check"></i>Design System
                          Development
                        </li>
                        <li>
                          <i className="fa-light fa-badge-check"></i>Creating AR /
                          VR Experiences
                        </li>
                        <li >
                          <i className="fa-light fa-badge-check"></i>Prototyping 
                        </li>
                        <li>
                          <i className="fa-light fa-badge-check"></i>Branding
                        </li>
                      </ul>
                    </div>
                  </div>
                </ReactWOW>
              </div>
              <div className="col-xl-5 col-lg-4 col-md-6  border shadow tp-service-2">
                <ReactWOW animation="fadeInUp" delay="0.3s" duration="1s">
                  <div className="tp-price-item  ">
                    <div className="tp-price-top-box mb-20 d-flex align-items-center ">
                      <span>Research And Academia</span>

                      <img
                        src="../img/service/Research.png"
                        height={90}
                        alt=""
                      />
                    </div>

                    <div className="tp-price-list mb-35">
                      <ul>
                        <li>
                          <i className="fa-light fa-badge-check"></i>Ideation
                        </li>
                        <li>
                          <i className="fa-light fa-badge-check"></i>Brainstorming
                        </li>
                        <li>
                          <i className="fa-light fa-badge-check"></i>Innovators Labs
                          & Incubators
                        </li>
                        <li >
                          <i className="fa-light fa-badge-check"></i>Hackathons &
                          Competitions
                        </li>
                        <li>
                          <i className="fa-light fa-badge-check"></i>Case Studies
                          & Success Stories
                        </li>
                      </ul>
                    </div>
                  </div>
                </ReactWOW>
              </div>
              <div className="col-xl-5 col-lg-4 col-md-6 border shadow tp-service-2">
                <ReactWOW animation="fadeInUp" delay="0.3s" duration="1s">
                  <div className="tp-price-item ">
                    <div className="tp-price-top-box mb-20 d-flex align-items-center ">
                      <span>Digital Marketing</span>

                      <img src="../img/service/SEO-1.png" height={90} alt="" />
                    </div>

                    <div className="tp-price-list mb-35">
                      <ul>
                        <li>
                          <i className="fa-light fa-badge-check"></i>Online
                          Reputation Management
                        </li>
                        <li>
                          <i className="fa-light fa-badge-check"></i>Conversion Rate
                          Optimisation
                        </li>
                        <li>
                          <i className="fa-light fa-badge-check"></i>SEO & SMO
                        </li>
                        <li >
                          <i className="fa-light fa-badge-check"></i>Digital Ad
                          Campaign Running Management
                        </li>
                        <li>
                          <i className="fa-light fa-badge-check"></i>Influencer
                          Marketing Management
                        </li>
                      </ul>
                    </div>
                  </div>
                </ReactWOW>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
