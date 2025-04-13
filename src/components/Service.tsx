import { FC } from "react";

const ServiceComponent: FC = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Best Features
          </h6>
          <h3 className="wow" data-splitting>
            Services
          </h3>
          {/* <span className="tbg">Services</span> */}
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
              <span className="icon pe-7s-global"></span>
              <h6>Mobile App Development</h6>
              <p className="pragraph">
                We design and develop intuitive, high-performance mobile apps
                for iOS and Android, delivering seamless user experiences and
                scalable solutions that grow with your business.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
              <span className="icon pe-7s-phone"></span>
              <h6>Web Development</h6>
              <p className="pragraph">
                We craft responsive and high-performing websites tailored to
                your business goals, using the latest technologies to ensure
                fast, secure, and scalable solutions.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item wow fadeInUp" data-wow-delay=".5s">
              <span className="icon pe-7s-tools"></span>
              <h6>System Bug Fixes</h6>
              <p className="pragraph">
                Identifying and resolving system bugs promptly to ensure optimal
                performance and reliability. We continuously monitor for
                issues,and refine processes to enhance user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="half-bg bottom"></div>
    </section>
  );
};

export default ServiceComponent;
