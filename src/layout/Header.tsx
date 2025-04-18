import { FC } from "react";

const HeaderComponent: FC = () => {
  return (
    <header className="header">
      <div className="container d-flex align-items-center justify-content-between">
        {/* <a href="index.html">
            <img src="assets/images/logo.png" alt="logo" />
          </a> */}

        <button className="bg-transparent border-0 d-xl-none">
          <div className="nav-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
