import { FC } from "react";

const AboutComponent: FC = () => {
  return (
    <div className="hero-sec section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <div className="sub-title">
                <h6>About Me</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="main-title wow" data-splitting>
                My mission is to design and develop high-quality, scalable web
                and mobile app.
              </h3>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Hello! I’m Dhiraj Chauhan. Software Engineer from India. My
                mission is to design and develop high-quality, scalable web and
                mobile applications that deliver exceptional user experiences,
                leveraging my full-stack expertise in Java, Spring Boot,
                ReactJS, and modern DevOps practices.
              </p>
              <a
                href="/uploads/resume/ATS-Dhiraj Chauhan JAVA Full Stack.pdf"
                className="mt-40 dowanload-cv-button"
                download="DhirajChauhanCV.pdf"
              >
                Download C.V
              </a>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="skills-box full-width">
              <div className="skill-item">
                <h6 className="custom-font">Mobile App Development</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="90%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">Web App Development</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="80%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">System Bug Fixes</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="88%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
