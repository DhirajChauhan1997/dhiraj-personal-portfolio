import { FC } from "react";

const NavigationBarComponent: FC = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo */}
        <a className="logo" href="#" style={{ width: 150 }}>
          {/* <img src="img/logo-light.png" alt="logo" /> */}
          <label className="logo-title">Dhiraj Chauhan</label>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        {/* navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Showcases
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="showcase.html">
                  Full Screen
                </a>
                <a className="dropdown-item" href="showcase2.html">
                  Creative Carousel
                </a>
                <a className="dropdown-item" href="showcase3.html">
                  Radius Carousel
                </a>
                <a className="dropdown-item" href="showcase4.html">
                  Columns Carousel
                </a>
              </div>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                About
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Portfolio
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="works.html">
                  Mouse Info
                </a>
                <a className="dropdown-item" href="works2.html">
                  Masonry 3 Columns
                </a>
                <a className="dropdown-item" href="works3.html">
                  Masonry 2 Columns
                </a>
                <a className="dropdown-item" href="works4.html">
                  Pinterest List
                </a>
              </div>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Dowanload CV
              </a>
            </li>
          </ul>
          {/* <div className="search">
            <span className="icon pe-7s-search cursor-pointer"></span>
            <div className="search-form text-center custom-font">
              <form>
                <input type="text" name="search" placeholder="Search" />
              </form>
              <span className="close pe-7s-close cursor-pointer"></span>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBarComponent;
