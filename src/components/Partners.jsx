import React from 'react'
import ReactWOW from "react-wow";

const Partners = () => {
  return (
    <>
      <section className="tp-brand-5-area pt-150 pb-130 p-relative">
        <div className="container">
          <div className="row">
            <ReactWOW animation="fadeInUp">
              <div className="tp-section-5-title-wrapper mb-50 text-center ">
                <h3 className="tp-section-5-title">Our Business Partners</h3>
              </div>
            </ReactWOW>
          </div>
          <ReactWOW animation="fadeInUp">
            <div className="row row-cols-xl-5 row-cols-md-3 tp-brand-5-top-width  justify-content-center">
              <div className="col col-lg-3">
                <div className="tp-brand-5-wrapper">
                  <div className="tp-brand-5-thumb">
                    <img src="./img/brand/Banco.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col col-lg-3">
                <div className="tp-brand-5-wrapper">
                  <div className="tp-brand-5-thumb">
                    <img src="../img/brand/FG.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col col-lg-3">
                <div className="tp-brand-5-wrapper">
                  <div className="tp-brand-5-thumb">
                    <img src="../img/brand/P.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col col-lg-3">
                <div className="tp-brand-5-wrapper">
                  <div className="tp-brand-5-thumb">
                    <img src="../img/brand/Mother.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col col-lg-3">
                <div className="tp-brand-5-wrapper">
                  <div className="tp-brand-5-thumb">
                    <img src="../img/brand/Studio.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col col-lg-3">
                <div className="tp-brand-5-wrapper">
                  <div className="tp-brand-5-thumb">
                    <img src="../img/brand/Robust.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col col-lg-3">
                <div className="tp-brand-5-wrapper">
                  <div className="tp-brand-5-thumb">
                    <img src="../img/brand/VE.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col col-lg-3">
                <div className="tp-brand-5-wrapper">
                  <div className="tp-brand-5-thumb">
                    <img src="../img/brand/Plane.png" alt="" />
                  </div>
                </div>
              </div>
              {/* <div className="col col-lg-3">
                <div className="tp-brand-5-wrapper">
                  <div className="tp-brand-5-thumb">
                    <img src="../img/brand/Cine-Compass.jpg" alt="" />
                  </div>
                </div>
              </div> */}
            </div>
          </ReactWOW>
        </div>
      </section>
    </>
  );
}

export default Partners
