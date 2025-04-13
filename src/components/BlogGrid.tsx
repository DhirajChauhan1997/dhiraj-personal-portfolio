import { FC } from "react";

const BlogGridComponent: FC = () => {
  return (
    <section className="blog-grid section-padding">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="fadeIn" data-wow-delay=".5s">
            Latest News
          </h6>
          <h3 className="wow" data-splitting>
            Our Blogs.
          </h3>
          <span className="tbg">Blogs</span>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div
              className="item list md-mb50 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="img">
                <img src="img/blog/1.jpg" alt="image" />
              </div>
              <div className="cont">
                <a href="#0" className="date custom-font">
                  <span>
                    <i>06</i> August
                  </span>
                </a>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <a href="#0" className="tag">
                    <span>WordPress</span>
                  </a>
                </div>
                <h6>
                  <a href="#0">
                    The Start-Up Ultimate Guide to Make Your WordPress Journal.
                  </a>
                </h6>
                <div className="btn-more custom-font">
                  <a href="#0" className="simple-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="item list md-mb50 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="img">
                <img src="img/blog/2.jpg" alt="image" />
              </div>
              <div className="cont">
                <a href="#0" className="date custom-font">
                  <span>
                    <i>06</i> August
                  </span>
                </a>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <a href="#0" className="tag">
                    <span>WordPress</span>
                  </a>
                </div>
                <h6>
                  <a href="#0">
                    The Start-Up Ultimate Guide to Make Your WordPress Journal.
                  </a>
                </h6>
                <div className="btn-more custom-font">
                  <a href="#0" className="simple-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item list wow fadeInUp" data-wow-delay=".8s">
              <div className="img">
                <img src="img/blog/3.jpg" alt="image" />
              </div>
              <div className="cont">
                <a href="#0" className="date custom-font">
                  <span>
                    <i>06</i> August
                  </span>
                </a>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <a href="#0" className="tag">
                    <span>WordPress</span>
                  </a>
                </div>
                <h6>
                  <a href="#0">
                    The Start-Up Ultimate Guide to Make Your WordPress Journal.
                  </a>
                </h6>
                <div className="btn-more custom-font">
                  <a href="#0" className="simple-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGridComponent;
