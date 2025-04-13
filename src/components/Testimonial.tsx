import { FC } from "react";

const TestimonialComponent: FC = () => {
  return (
    <section
      className="testimonials section-padding sub-bg lftstl bg-img parallaxie"
      data-background="img/slid/3.jpg"
      data-overlay-dark="9"
    >
      <div className="container position-re">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            What Peapole Says?
          </h6>
          <h3 className="wow" data-splitting>
            Testimonials.
          </h3>
          <span className="tbg">Testimonials</span>
        </div>
        <div
          className="row justify-content-center wow fadeInUp"
          data-wow-delay=".5s"
        >
          <div className="col-lg-8">
            <div className="slic-item">
              <div className="item">
                <p>
                  Working with Avo digital agency to support our organic and
                  paid social media activity has extended the marketing
                  activities we are able to achieve platform has made
                  collaboration easy.
                </p>
                <div className="info">
                  <div className="cont">
                    <div className="author">
                      <div className="lxleft">
                        <div className="img">
                          <img src="img/clients/1.jpg" alt="image" />
                        </div>
                      </div>
                      <div className="fxright">
                        <h6 className="author-name custom-font">
                          Alex Regelman
                        </h6>
                        <span className="author-details">
                          Co-founder, Colabrio
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <p>
                  Avo started out managing our SEO efforts, but their scientific
                  approach to digital marketing and the results they have
                  achieved made it an easy decision for us to handover the
                  management.
                </p>
                <div className="info">
                  <div className="cont">
                    <div className="author">
                      <div className="lxleft">
                        <div className="img">
                          <img src="img/clients/2.jpg" alt="image" />
                        </div>
                      </div>
                      <div className="fxright">
                        <h6 className="author-name custom-font">
                          Alex Regelman
                        </h6>
                        <span className="author-details">
                          Co-founder, Colabrio
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <p>
                  I would highly recommend Avo Digital. I worked with the team
                  on an animation for our ‘Click & Collect’ service. This team
                  is different from any other agency I have worked with in the
                  past.
                </p>
                <div className="info">
                  <div className="cont">
                    <div className="author">
                      <div className="lxleft">
                        <div className="img">
                          <img src="img/clients/3.jpg" alt="image" />
                        </div>
                      </div>
                      <div className="fxright">
                        <h6 className="author-name custom-font">
                          Alex Regelman
                        </h6>
                        <span className="author-details">
                          Co-founder, Colabrio
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="arrows">
          <div className="next cursor-pointer">
            <span className="pe-7s-angle-right"></span>
          </div>
          <div className="prev cursor-pointer">
            <span className="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
