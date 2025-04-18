import { FC } from "react";

const NavigationBarComponent: FC = () => {
  return (
    <nav className="navigation" id="navigation">
      {/* <img
                src="assets/images/logo.png"
                className="d-xl-none d-xxl-block"
                height="40"
                alt="logo"
              /> */}
      <ul>
        <li className="nav-link">
          <a href="#top" className="active">
            <span className="text">top</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#about_me">
            <span className="text">about me</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#services">
            <span className="text">my services</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#attainments">
            <span className="text">skills</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#fun_facts">
            <span className="text">facts</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#experience">
            <span className="text">experiences</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#projects">
            <span className="text">projects</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#how_i_work">
            <span className="text">how i work</span>
          </a>
        </li>
        {/* <li className="nav-link">
                  <a href="#blogs">
                    <span className="text">Blogs</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#testimonials">
                    <span className="text">testimonials</span>
                  </a>
                </li> */}
        <li className="nav-link">
          <a href="#contact">
            <span className="text">contact</span>
          </a>
        </li>
      </ul>
      {/* <div className="contact">
              <a href="mailto:john@wilson.com">emily@devis.com</a>
              <a href="tel:+420 652 887 351">+420 652 887 351</a>
            </div> */}
    </nav>
  );
};

export default NavigationBarComponent;
