import { FC } from "react";

const HeaderComponent: FC = () => {
  return (
    <header
      className="freelancer sub-bg valign bg-img parallaxie"
      // data-background="/img/slid/freelancer.jpg"
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <h6>Hello, I'm</h6>
              <h1>Dhiraj Chauhan</h1>
              <h4>Java Full Stack Engineer</h4>
              <div className="social-icon">
                {/* <a href="#0" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a> */}
                {/* <a href="#0" className="icon">
                  <i className="fab fa-twitter"></i>
                </a> */}
                <a href="#0" className="icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
