

const Contact = () => {
  return (
    <main className="">
      <section
        className="tp-portfolio-breadcrumb-area p-relative"
        data-background="../img/contact/contact-brdcmb-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="tp-portfolio-breadcrumb-content text-center">
              <h2 className="tp-portfolio-breadcrumb-title tp-portfolio-breadcrumb-title-cntct-us">
                Contact Us
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-contact-area mb-5 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <form
                id="contact-form"
                action="https://html.hixstudio.net/techub-prev/techub/assets/mail.php"
                method="POST"
                className="tp-contact-inner-page-wrapper"
              >
                <div className="tp-contact-box tp-contact-inner-page-box mb-120">
                  <h3 className="tp-contact-title tp-contact-title-inner-page wow fadeInUp">
                    Send your message
                  </h3>
                  <div className="tp-contact-form tp-contact-form-inner-page wow fadeInUp">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <input
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <input
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <input
                          name="text"
                          type="text"
                          placeholder="Your Company"
                        />
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <input
                          name="subject"
                          type="text"
                          placeholder="Enter Your Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <textarea
                        name="message"
                        placeholder="Write Your Message"
                      ></textarea>
                    </div>
                    <div className="tp-contact-submit">
                      <button className="tp-btn" type="submit">
                        <span>Send Message</span>
                      </button>
                    </div>
                    <p className="ajax-response"></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="tp-contact-inner-page-bottom">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-4 col-md-6 ">
                <div
                  className="tp-contact-inner-page-item mb-30 text-center wow fadeInUp"
                  data-wow-delay=".5s"
                  data-wow-duration="1s"
                >
                  <div className="tp-contact-inner-page-icon">
                    <span>
                      <i className="fa-light fa-envelope"></i>
                    </span>
                  </div>
                  <div className="tp-contact-inner-page-content">
                    <h3 className="tp-contact-inner-page-title">Contact us</h3>
                    <a href="#">
                      contact@mmsolutions.co.in <br />
                      +(91) 870 0125 888
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="tp-contact-inner-page-item mb-30 text-center wow fadeInUp"
                  data-wow-delay=".7s"
                  data-wow-duration="1s"
                >
                  <div className="tp-contact-inner-page-icon">
                    <span>
                      <i className="fa-light fa-clock"></i>
                    </span>
                  </div>
                  <div className="tp-contact-inner-page-content">
                    <h3 className="tp-contact-inner-page-title">Office time</h3>
                    <a href="#">
                      Six days 8:00 am - 5:00 pm <br /> Sunday is closed
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact
