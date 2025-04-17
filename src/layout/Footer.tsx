import { FC } from "react";

const FooterComponent: FC = () => {
  return (
    <footer className="footer-half sub-bg section-padding pb-0">
      <div className="container">
        <div className="row">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img src="img/logo-light.png" alt="Logo" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email: </span>
                    <a href="mailto:dhiraj.chauhan1997@gmail.com">
                      dhiraj.chauhan1997@gmail.com
                    </a>
                  </li>
                  <li>
                    <span>Address: </span>
                    A32, Ave 15th Street, Door 211, San Francisco, USA 32490.
                  </li>
                  <li>
                    <span>Phone: </span>
                    <a href="tel:+123456784488">(+1) 2345 678 44 88</a>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a href="#0" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter and Instagram */}
          <div className="col-lg-5 offset-lg-2">
            {/* Newsletter */}
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">Newsletter</h6>
              <p>Sign up to subscribe to our newsletter!</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group custom-font">
                  <input
                    type="email"
                    name="subscribe"
                    placeholder="Your Email"
                    required
                  />
                  <button type="submit" className="cursor-pointer">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            {/* Instagram Gallery */}
            <div className="insta">
              <h6 className="custom-font stit simple-btn">Instagram Post</h6>
              <div className="insta-gallary">
                <a href="#0">
                  <img src="img/insta/1.jpg" alt="Instagram 1" />
                </a>
                <a href="#0">
                  <img src="img/insta/2.jpg" alt="Instagram 2" />
                </a>
                <a href="#0">
                  <img src="img/insta/3.jpg" alt="Instagram 3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="copyrights text-center">
          <p>
            © 2025,
            <a href="#0">Dhiraj Chauhan</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
