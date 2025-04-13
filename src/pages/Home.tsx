import BlogComponent from "../components/Blog";
import BlogGridComponent from "../components/BlogGrid";
import ProjectComponent from "../components/Project";
import ServiceComponent from "../components/Service";
import AboutComponent from "../components/About";
import FooterComponent from "../layout/Footer";
import HeaderComponent from "../layout/Header";
import NavigationBarComponent from "../layout/NavigationBar";

const HomePage = () => {
  return (
    <>
      {/* ==================== Start Loading ==================== */}

      {/* <div id="preloader"></div> */}

      {/* ==================== End Loading ==================== */}

      {/* ==================== Start progress-scroll-button ==================== */}

      <div className="progress-wrap cursor-pointer">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      {/* ==================== End progress-scroll-button ==================== */}

      {/* ==================== Start cursor ==================== */}

      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>

      {/* ==================== End cursor ==================== */}

      {/* ==================== Start Navbar ==================== */}
      <NavigationBarComponent />

      {/* ==================== Start Slider ==================== */}
      <HeaderComponent />

      {/* ==================== Start about ==================== */}
      <AboutComponent />

      {/* ==================== Start Services ==================== */}
      <ServiceComponent />

      {/* ==================== Start numbers ==================== */}
      {/* <NumberComponent /> */}

      {/* ==================== Start Works ==================== */}
      <ProjectComponent />

      {/* ==================== Start testimonials ==================== */}
      {/* <TestimonialComponent /> */}

      {/* ==================== Start Blog ==================== */}
      <BlogGridComponent />

      {/* ==================== Start clients Brands ==================== */}
      {/* <BrandComponent /> */}

      {/* ==================== Start Blog ==================== */}
      <BlogComponent />

      {/* ==================== Start Footer ==================== */}
      <FooterComponent />
    </>
  );
};

export default HomePage;
