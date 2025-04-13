import { FC } from "react";

const BlogComponent: FC = () => {
  return (
    <section className="contact-sec section-padding">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Get In Touch
          </h6>
          <h3 className="wow" data-splitting>
            Contact Us.
          </h3>
          <span className="tbg">Contact</span>
        </div>
        <div
          className="row justify-content-center wow fadeInUp"
          data-wow-delay=".5s"
        >
          <div className="col-lg-10">
            <div className="form">
              <form
                id="contact-form"
                method="post"
                action="https://ui-themez.smartinnovates.net/items/avo/avo-dark/contact.php"
              >
                <div className="messages"></div>

                <div className="controls">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows={4}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="text-center">
                        <button
                          type="submit"
                          className="simple-btn custom-font cursor-pointer"
                        >
                          <span>Send Message</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
