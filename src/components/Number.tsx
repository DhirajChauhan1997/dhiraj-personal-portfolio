import { FC } from "react";

const NumberComponent: FC = () => {
  return (
    <section className="number-sec section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="item no-bord">
              <span className="icon pe-7s-smile"></span>
              <h3 className="custom-font">
                <span className="count">10</span>
              </h3>
              <p className="wow txt" data-splitting>
                Happy Clients
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item">
              <span className="icon pe-7s-portfolio"></span>
              <h3 className="custom-font">
                <span className="count">10</span>
              </h3>
              <p className="wow txt" data-splitting>
                Compleate Projects
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item">
              <span className="icon pe-7s-cloud-download"></span>
              <h3 className="custom-font">
                <span className="count">254</span> k
              </h3>
              <p className="wow txt" data-splitting>
                Files Downloaded
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item">
              <span className="icon pe-7s-medal"></span>
              <h3 className="custom-font">
                <span className="count">46</span>
              </h3>
              <p className="wow txt" data-splitting>
                Award Win
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberComponent;
