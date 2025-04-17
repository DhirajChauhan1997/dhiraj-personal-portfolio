const HomePage = () => {
  return (
    <>
      {/* header section */}

      <div id="grain"></div>

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

      {/* main content */}
      <main className="container">
        <div className="row gx-xxl-6">
          <div
            className="col-12"
            data-bs-spy="scroll"
            data-bs-target="#navigation"
          >
            {/* hero */}
            <section id="top" className="hero">
              <div className="row gx-4 align-items-center">
                <div className="col-12 col-md-6 col-xl-6 hero-content">
                  <div>
                    <h4 className="text-uppercase freelancer">
                      HI, I'M Dhiraj Chauhan
                    </h4>
                    <h1
                      className="text-uppercase overflow-hidden developer"
                      id="typewriter"
                    ></h1>
                    <p className="description">
                      Java Full Stack Engineer, India.
                    </p>
                  </div>
                  <div className="d-flex gap-4">
                    <a
                      href="#projects"
                      className="btn work-btn text-capitalize btn-secondary"
                    >
                      view my work
                    </a>
                    <a
                      href="#contact"
                      className="btn contact-btn text-capitalize btn-outline-secondary"
                    >
                      contact me
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-5 offset-md-1 offset-xxl-2 col-xl-4">
                  <div className="img-wrapper">
                    <div className="waves-top">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <img
                      className="img-fluid rounded-circle hero-img"
                      src="assets/images/hero1.jpg"
                      alt=""
                    />
                    <div className="waves-bottom">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <a
                    href="#about_me"
                    className="d-flex gap-4 align-items-center next-chapter"
                  >
                    <span className="page">01/10</span>
                    <span className="next">Next Chapter</span>
                    <span className="icon">
                      <i className="ph ph-arrow-elbow-right-down"></i>
                    </span>
                  </a>
                </div>
              </div>
            </section>

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
            <div className="nav-overlay d-xl-none"></div>
            {/* about me */}
            <section id="about_me" className="about section">
              <span className="section-title-overlay-text">About me</span>
              <div className="section-title text-capitalize">
                <h4>Some Word About me</h4>
                <h2>know me more</h2>
              </div>
              <div className="row mb-4 mb-lg-5 align-items-center">
                <div className="col-lg-7 col-xl-8 about-desc">
                  <h2>I'm Dhiraj Chauhan, a Software Engineer</h2>
                  <p className="desc">
                    I'm a designer &amp; developer with a passion form web
                    design. I enjoy developing simple, clean and slick websites
                    that provide real value to the end user. Thousands of
                    clients have procured exceptional results while working with
                    me. Delivering work within time and budget which meets
                    client's requirements is our moto.
                  </p>
                  <div className="row contact">
                    <div className="col-sm-5">
                      <p>Email:</p>
                      <a href="mailto:chat@portify.com">
                        dhiraj.chauhan1997@gmail.com
                      </a>
                    </div>
                    <div className="col-sm-4">
                      <p>Date of Birth:</p>
                      <span>22 Septamber, 1997</span>
                    </div>
                    <div className="col-sm-3">
                      <p>Place:</p>
                      <span>India</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-xl-4">
                  <div className="experience-card">
                    <div className="card-inner"></div>
                    <div>
                      <div className="numbers">
                        <span className="number-outline-one">5</span>
                        <span className="number-outline-two">5</span>
                        <span className="number-main">5</span>
                      </div>
                      <p>Years of experience</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <a
                  href="#services"
                  className="d-flex gap-4 align-items-center next-chapter"
                >
                  <span className="page">02/10</span>
                  <span className="next">Next Chapter</span>
                  <span className="icon">
                    <i className="ph ph-arrow-elbow-right-down"></i>
                  </span>
                </a>
              </div>
            </section>

            {/* services */}
            <section
              id="services"
              className="services section position-relative"
            >
              <span className="section-title-overlay-text">my services</span>
              <div className="section-title text-capitalize">
                <h4>How I can help your next project</h4>
                <h2>What I Do?</h2>
              </div>
              <div dir="ltr" className="swiper service-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide overflow-visible p-3">
                    <div className="service-card">
                      <div className="card-inner"></div>
                      <div className="content">
                        <div className="number-circle">
                          <div className="waves-top-sm">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          <h2>01</h2>
                          <div className="waves-bottom-sm">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                        <h4>UI/UX Design</h4>
                        <ul className="service-list">
                          <li>
                            <i className="ph ph-caret-double-right"></i> Landing
                            Pages
                          </li>
                          <li>
                            <i className="ph ph-caret-double-right"></i> User
                            Flow
                          </li>
                          <li>
                            <i className="ph ph-caret-double-right"></i>
                            Wireframing
                          </li>
                          <li>
                            <i className="ph ph-caret-double-right"></i>
                            Prototyping
                          </li>
                          <li>
                            <i className="ph ph-caret-double-right"></i> Mobile
                            App Design
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide overflow-visible p-3">
                    <div className="service-card">
                      <div className="card-inner"></div>
                      <div className="content">
                        <div className="number-circle">
                          <div className="waves-top-sm">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          <h2>02</h2>
                          <div className="waves-bottom-sm">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                        <h4>Development</h4>
                        <ul className="service-list">
                          <li>
                            <i className="ph ph-caret-double-right"></i>
                            Front-End Development
                          </li>
                          <li>
                            <i className="ph ph-caret-double-right"></i>
                            Back-End Development
                          </li>
                          <li>
                            <i className="ph ph-caret-double-right"></i>
                            Full-Stack Development
                          </li>
                          <li>
                            <i className="ph ph-caret-double-right"></i>
                            Database Management
                          </li>
                          <li>
                            <i className="ph ph-caret-double-right"></i> API
                            Integration Design
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide overflow-visible p-3">
                    <div className="service-card">
                      <div className="card-inner"></div>
                      <div className="content">
                        <div className="number-circle">
                          <div className="waves-top-sm">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          <h2>03</h2>
                          <div className="waves-bottom-sm">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                        <h4>Illustration</h4>
                        <ul className="service-list">
                          <li>
                            <i className="ph ph-caret-double-right"></i>
                            Character Design
                          </li>
                          <li>
                            <i className="ph ph-caret-double-right"></i> Icon
                            Set
                          </li>
                          <li>
                            <i className="ph ph-caret-double-right"></i>
                            Illustration Guide
                          </li>
                          <li>
                            <i className="ph ph-caret-double-right"></i>
                            Illustration Set
                          </li>
                          <li>
                            <i className="ph ph-caret-double-right"></i> Motion
                            Graphic Design
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide overflow-visible p-3">
                    <div className="service-card">
                      <div className="card-inner"></div>
                      <div className="content">
                        <div className="number-circle">
                          <div className="waves-top-sm">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          <h2>04</h2>
                          <div className="waves-bottom-sm">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                        <h4>App Development</h4>
                        <ul className="service-list">
                          <li>
                            <i className="ph ph-caret-double-right"></i> Android
                            App
                          </li>
                          <li>
                            <i className="ph ph-caret-double-right"></i> Ios App
                          </li>
                          <li>
                            <i className="ph ph-caret-double-right"></i>
                            Wireframing
                          </li>
                          <li>
                            <i className="ph ph-caret-double-right"></i>
                            Prototyping
                          </li>
                          <li>
                            <i className="ph ph-caret-double-right"></i> Mobile
                            App Design
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
              <div className="col-12">
                <a
                  href="#attainments"
                  className="d-flex gap-4 align-items-center next-chapter"
                >
                  <span className="page">03/10</span>
                  <span className="next">Next Chapter</span>

                  <i className="ph ph-arrow-elbow-right-down"></i>
                </a>
              </div>
            </section>

            {/* attainments */}
            <section
              id="attainments"
              className="attainments section position-relative"
            >
              <span className="section-title-overlay-text">ATTAINMENTS</span>
              <div className="row pb-120 design-row">
                <div className="col-lg-4">
                  <div className="section-title-sm">
                    <div className="top">
                      <h2>Design Skills</h2>
                      <span>Highlight My Expertise in:</span>
                    </div>
                    <span className="serial">01.-</span>
                  </div>
                </div>
                <div className="col-12 col-lg-8">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="d-flex flex-column align-items-center mb-4">
                        <div className="design-chart mb-4"></div>
                        <button className="btn btn-outline-secondary px-5">
                          Design
                        </button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex flex-column align-items-center mb-4">
                        <div className="branding-chart mb-4"></div>
                        <button className="btn btn-outline-secondary px-5">
                          Branding
                        </button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex flex-column align-items-center mb-4">
                        <div className="ecommerce-chart mb-4"></div>
                        <button className="btn btn-outline-secondary px-5">
                          Ecommerce
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pb-120 developer-row">
                <div className="col-md-5 col-lg-4 offset-sm-1 offset-lg-2">
                  <div className="section-title-sm">
                    <div className="top">
                      <h2>Developer Skills</h2>
                      <span>Highlight My Expertise in:</span>
                    </div>
                    <span className="serial">02.-</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-column gap-3">
                    <div className="skill">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>Front-End Development</span>
                        <span>90%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar ninety"
                          data-width="90%"
                        ></div>
                      </div>
                    </div>
                    <div className="skill">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>Back-End Development</span>
                        <span>85%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar ninety"
                          data-width="85%"
                        ></div>
                      </div>
                    </div>
                    <div className="skill">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>Full-Stack Development</span>
                        <span>88%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar ninety"
                          data-width="88%"
                        ></div>
                      </div>
                    </div>
                    <div className="skill">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>Database Management</span>
                        <span>80%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar ninety"
                          data-width="80%"
                        ></div>
                      </div>
                    </div>
                    <div className="skill">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>Version Control</span>
                        <span>95%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar ninety"
                          data-width="95%"
                        ></div>
                      </div>
                    </div>
                    <div className="skill">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>API Integration</span>
                        <span>87%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar ninety"
                          data-width="87%"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pb-120 language-row">
                <div className="col-lg-4">
                  <div className="section-title-sm">
                    <div className="top">
                      <h2>Language Skills</h2>
                      <span>Highlight My Expertise in:</span>
                    </div>
                    <span className="serial">03.-</span>
                  </div>
                </div>
                <div className="col-12 col-lg-8">
                  <div className="row g-3">
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="d-flex flex-column align-items-center mb-4">
                        <div className="design-chart mb-4"></div>
                        <button className="btn btn-outline-secondary px-5">
                          Hindi
                        </button>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="d-flex flex-column align-items-center mb-4">
                        <div className="branding-chart mb-4"></div>
                        <button className="btn btn-outline-secondary px-5">
                          English
                        </button>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="d-flex flex-column align-items-center mb-4">
                        <div className="ecommerce-chart mb-4"></div>
                        <button className="btn btn-outline-secondary px-5">
                          Gujarati
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <a
                  href="#fun_facts"
                  className="d-flex gap-4 align-items-center next-chapter"
                >
                  <span className="page">04/10</span>
                  <span className="next">Next Chapter</span>
                  <span className="icon">
                    <i className="ph ph-arrow-elbow-right-down"></i>
                  </span>
                </a>
              </div>
            </section>

            {/* fun facts */}
            <section id="fun_facts" className="fun_facts section">
              <span className="section-title-overlay-text">my facts</span>
              <div className="section-title text-capitalize">
                <h4>Some interesting facts about me</h4>
                <h2>Fun Facts</h2>
              </div>
              <div className="row pb-60">
                <div className="col-sm-6 col-md-4 col-xl-3">
                  <div className="fun-fact">
                    <div className="numbers">
                      <span className="number-outline-one">10</span>
                      <span className="number-outline-two">10</span>
                      <span className="number-main">10</span>
                    </div>
                    <p>Finished Projects</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 offset-md-1 col-xl-3">
                  <div className="fun-fact">
                    <div className="numbers">
                      <span className="number-outline-one">10</span>
                      <span className="number-outline-two">10</span>
                      <span className="number-main">10</span>
                    </div>
                    <p>Happy Customers</p>
                  </div>
                </div>
              </div>
              <div className="row pb-60">
                <div className="col-sm-6 col-md-4 offset-md-2 offset-xl-5 col-xl-3">
                  <div className="fun-fact">
                    <div className="numbers">
                      <span className="number-outline-one">1000</span>
                      <span className="number-outline-two">1000</span>
                      <span className="number-main">1000</span>
                    </div>
                    <p>Working Hours</p>
                  </div>
                </div>
                {/* <div className="col-sm-6 col-md-4 offset-md-1 col-xl-3">
                  <div className="fun-fact">
                    <div className="numbers">
                      <span className="number-outline-one">232</span>
                      <span className="number-outline-two">232</span>
                      <span className="number-main">232</span>
                    </div>
                    <p>Coffe Cups</p>
                  </div>
                </div> */}
              </div>
              <div className="col-12">
                <a
                  href="#experience"
                  className="d-flex gap-4 align-items-center next-chapter"
                >
                  <span className="page">05/10</span>
                  <span className="next">Next Chapter</span>
                  <span className="icon">
                    <i className="ph ph-arrow-elbow-right-down"></i>
                  </span>
                </a>
              </div>
            </section>

            {/* experience */}
            <section
              id="experience"
              className="experience section position-relative"
            >
              <span className="section-title-overlay-text">EXPERIENCES</span>
              <div className="section-title text-capitalize">
                <h4>Highlight My key Experiences</h4>
                <h2>My Experience</h2>
              </div>
              <div className="row pb-60">
                <div className="col-lg-10 col-xl-8">
                  <div className="experience-wrapper d-flex flex-column">
                    <div className="experience-item">
                      <h5>(Nov 2020 - Jan 2025)</h5>
                      <h3>
                        Senior Software Engineer at eMeasurematics Pvt Ltd:
                      </h3>
                      <p>
                        eMeasurematics specializes in steel yard management
                        solutions, catering to clients ranging from single-line
                        metal processing centers to fully integrated plants. Our
                        expertise includes material tracking, L2 software, and
                        comprehensive yard and warehouse management systems.
                        Leveraging Spring Boot, Microservices, Java, ReactJS,
                        and React Native, we develop robust web and mobile
                        applications to manage yard operations across multiple
                        companies efficiently.
                      </p>
                    </div>
                    <div className="experience-item">
                      <h5>(Jul 2020 - Nov 2020)</h5>
                      <h3>Freelancer Software Engineer at Upwork:</h3>
                      <p>
                        Worked on client-driven software solutions using Flutter
                        for cross-platform mobile development and Spring
                        Framework for robust backend systems. Delivered
                        responsive, scalable applications while utilizing over
                        28 technologies to meet diverse business requirements.
                      </p>
                    </div>
                    <div className="experience-item">
                      <h5>(Jan 2020 - Jul 2020)</h5>
                      <h3>Software Engineer Intern at Gyrus System:</h3>
                      <p>
                        Developed a cross-platform mobile LMS app using Flutter
                        and ASP.NET Core. Designed and optimized backend REST
                        APIs to enable secure authentication, data
                        synchronization, and features like course tracking and
                        assessments. Collaborated with teams to refine APIs.
                      </p>
                    </div>
                    {/* 
                    <div className="experience-item">
                      <h5>(2014 - 2016)</h5>
                      <h3>Freelance Web Developer:</h3>
                      <p>
                        Worked on various freelance projects, creating custom
                        websites form clients across different industries.
                        Improved problem-solving skills and adaptability to
                        client needs.
                      </p>
                    </div> */}
                  </div>

                  <a
                    href="assets/resume.html"
                    className="download-cv position-relative"
                    download
                  >
                    <div className="waves-top-md">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <img src="assets/images/arrow.png" alt="" />
                    <div className="waves-bottom-md">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-12">
                <a
                  href="#projects"
                  className="d-flex gap-4 align-items-center next-chapter"
                >
                  <span className="page">06/10</span>
                  <span className="next">Next Chapter</span>
                  <span className="icon">
                    <i className="ph ph-arrow-elbow-right-down"></i>
                  </span>
                </a>
              </div>
            </section>

            {/* projects */}
            <section
              id="projects"
              className="projects section position-relative"
            >
              <span className="section-title-overlay-text">projects</span>
              <div className="section-title text-capitalize">
                <h4>Some of my most recent projects</h4>
                <h2>My Featured Projected</h2>
              </div>
              <div className="row pb-60 project-list g-4">
                <div className="col-sm-6 col-xl-4">
                  <div
                    className="single-project"
                    data-bs-toggle="modal"
                    data-bs-target="#project-details"
                    data-title="TechShop"
                    data-img="techshop-big"
                  >
                    <div className="project-card">
                      <div className="card-inner"></div>
                      <img
                        src="assets/images/project-one.png"
                        className="img-fluid w-100 card-img h-100"
                        alt=""
                      />
                      <div className="card-arrow">
                        <div className="arrow-inner">
                          <i className="ph ph-arrow-up-right"></i>
                        </div>
                      </div>
                    </div>
                    <div className="project-info">
                      <h2>School Management System</h2>
                      <p>School ERP Software</p>
                      <div className="tags d-flex align-items-center gap-1">
                        <span>design</span> - <span>frontend</span> -
                        <span>backend</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-4">
                  <div
                    className="single-project"
                    data-bs-toggle="modal"
                    data-bs-target="#project-details"
                    data-title="EduMaster"
                    data-img="edumaster-big"
                  >
                    <div className="project-card">
                      <div className="card-inner"></div>
                      <img
                        src="assets/images/project-two.png"
                        className="img-fluid w-100 card-img h-100"
                        alt=""
                      />
                      <div className="card-arrow">
                        <div className="arrow-inner">
                          <i className="ph ph-arrow-up-right"></i>
                        </div>
                      </div>
                    </div>
                    <div className="project-info">
                      <h2>School Mobile App</h2>
                      <p>Online Learning Platform</p>
                      <div className="tags d-flex align-items-center gap-1">
                        <span>ui/ux design</span> -
                        <span>mobile development</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-4">
                  <div
                    className="single-project"
                    data-bs-toggle="modal"
                    data-bs-target="#project-details"
                    data-title="QuickBite"
                    data-img="quickbite-big"
                  >
                    <div className="project-card">
                      <div className="card-inner"></div>
                      <img
                        src="assets/images/project-three.png"
                        className="img-fluid w-100 card-img h-100"
                        alt=""
                      />
                      <div className="card-arrow">
                        <div className="arrow-inner">
                          <i className="ph ph-arrow-up-right"></i>
                        </div>
                      </div>
                    </div>
                    <div className="project-info">
                      <h2>AP Home Service App</h2>
                      <p>Home Service Mobile App</p>
                      <div className="tags d-flex align-items-center gap-1">
                        <span>ui/ux design</span> -
                        <span>mobile development</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <a
                  href="#how_i_work"
                  className="d-flex gap-4 align-items-center next-chapter"
                >
                  <span className="page">07/10</span>
                  <span className="next">Next Chapter</span>

                  <i className="ph ph-arrow-elbow-right-down"></i>
                </a>
              </div>
            </section>

            {/* how i work */}
            <section
              id="how_i_work"
              className="how-i-work section position-relative"
            >
              <span className="section-title-overlay-text">How i Work</span>
              <div className="section-title text-capitalize">
                <h4>How i Work</h4>
                <h2>My Working Process</h2>
              </div>
              <div className="row pb-60 px-4 process-list justify-content-center">
                <div className="process col-6">
                  <span className="circle position-absolute w-100 h-100"></span>
                  <div>
                    <p>01.</p>
                    <p>idea</p>
                  </div>
                </div>
                <div className="process col-6">
                  <span className="circle-even position-absolute w-100 h-100"></span>
                  <div>
                    <p>02.</p>
                    <p>sketch</p>
                  </div>
                </div>
                <div className="process col-6">
                  <span className="circle position-absolute w-100 h-100"></span>
                  <div>
                    <p>03.</p>
                    <p>design</p>
                  </div>
                </div>
                <div className="process col-6">
                  <span className="circle-even position-absolute w-100 h-100"></span>
                  <div>
                    <p>04.</p>
                    <p>develop</p>
                  </div>
                </div>
                <div className="process col-6">
                  <span className="circle position-absolute w-100 h-100"></span>
                  <div>
                    <p>05.</p>
                    <p>text</p>
                  </div>
                </div>
                <div className="process col-6">
                  <span className="circle-even position-absolute w-100 h-100"></span>
                  <div>
                    <p>06.</p>
                    <p>launch</p>
                  </div>
                </div>
              </div>
              <div className="more-info d-flex flex-wrap align-items-center gap-5 gap-md-3">
                <p>Need More info? Please Get in touch</p>
                <span className="line"></span>
                <a href="#contact" className="arrow-down position-relative">
                  <div className="waves-top-md">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <img src="assets/images/arrow.png" alt="" />
                  <div className="waves-bottom-md">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </a>
              </div>
              <div className="col-12">
                <a
                  href="#testimonials"
                  className="d-flex gap-4 align-items-center next-chapter"
                >
                  <span className="page">08/10</span>
                  <span className="next">Next Chapter</span>
                  <i className="ph ph-arrow-elbow-right-down"></i>
                </a>
              </div>
            </section>
            {/* blogs */}
            {/* <section id="blogs" className="section blogs position-relative">
              <span className="section-title-overlay-text">My Blogs</span>
              <div className="section-title text-capitalize">
                <h4>Explore My Blog</h4>
                <h2>Latest Articles</h2>
              </div>
              <div className="pb-60 d-flex flex-column gap-4">
                <a href="blog-details.html" className="blog-card">
                  <div className="rounded-4 overflow-hidden img-wrapper">
                    <img
                      src="assets/images/blog-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="fw-medium mb-3">
                      Lessons Learned from 07 Years in the Industry
                    </h4>
                    <div className="d-flex align-items-center gap-4 flex-wrap mb-3">
                      <div className="d-flex gap-2 align-items-center fs-5">
                        <i className="ph ph-calendar"></i>
                        <p>April 14, 2024</p>
                      </div>
                      --
                      <div className="d-flex gap-2 align-items-center fs-5">
                        <i className="ph ph-clock"></i>
                        <p>3 Min Read</p>
                      </div>
                    </div>
                    <p className="details">
                      In the realm of technology blogging, captivating your
                      audience goes beyond just the written word. Incorporating
                      and provide a dynamic...
                    </p>
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center gap-2">
                        <span className="fs-3">•</span>
                        <p>Code</p>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fs-3">•</span>
                        <p>Guides</p>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fs-3">•</span>
                        <p>Tech</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="blog-details.html" className="blog-card">
                  <div className="rounded-4 overflow-hidden img-wrapper">
                    <img
                      src="assets/images/blog-2.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="fw-medium mb-3">
                      Balancing Creativity and Usability in Web Design
                    </h4>
                    <div className="d-flex align-items-center gap-4 flex-wrap mb-3">
                      <div className="d-flex gap-2 align-items-center fs-5">
                        <i className="ph ph-calendar"></i>
                        <p>April 14, 2024</p>
                      </div>
                      --
                      <div className="d-flex gap-2 align-items-center fs-5">
                        <i className="ph ph-clock"></i>
                        <p>3 Min Read</p>
                      </div>
                    </div>
                    <p className="details">
                      In the realm of technology blogging, captivating your
                      audience goes beyond just the written word. Incorporating
                      and provide a dynamic...
                    </p>
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center gap-2">
                        <span className="fs-3">•</span>
                        <p>Code</p>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fs-3">•</span>
                        <p>Guides</p>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fs-3">•</span>
                        <p>Tech</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="more-info d-flex flex-wrap align-items-center gap-5 gap-md-3">
                <a href="blogs.html" className="fs-5 fw-medium">
                  View All Articles
                </a>
                <span className="line"></span>
                <a href="blogs.html" className="arrow-down position-relative">
                  <div className="waves-top-md">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <svg
                    width="45"
                    height="54"
                    viewBox="0 0 45 54"
                    className="rotate-90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44 31.449L22.5 52.949L1 31.449L8.98204 23.3382L16.8353 31.449V0.550781H28.1647V31.449L36.018 23.3382L44 31.449Z"
                      stroke="currentColor"
                    />
                  </svg>
                  <div className="waves-bottom-md">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </a>
              </div>
              <div className="col-12">
                <a
                  href="#testimonials"
                  className="d-flex gap-4 align-items-center next-chapter"
                >
                  <span className="page">09/11</span>
                  <span className="next">Next Chapter</span>
                  <i className="ph ph-arrow-elbow-right-down"></i>
                </a>
              </div>
            </section> */}

            {/* testimonials */}
            {/* <section
              id="testimonials"
              className="testimonials section position-relative"
            >
              <span className="section-title-overlay-text">TESTIMONIALS</span>
              <div className="section-title text-capitalize">
                <h4>My Clients and Testimonials</h4>
                <h2>My Clients Reviews</h2>
              </div>
              <div dir="ltr" className="row pb-120 testimonial px-3">
                <div className="swiper testimonial-swiper pb-60">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-card">
                        <div className="img-wrapper">
                          <div className="inner">
                            <div className="waves-top-sm">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                            <img
                              src="assets/images/hero.png"
                              width="82"
                              height="82"
                              alt=""
                            />
                            <div className="waves-bottom-sm">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <h3>James Smith</h3>
                          <div className="d-flex align-items-center gap-2 mb-4">
                            <p>website owner</p>
                            <p>--</p>
                            <span>www.websites.com</span>
                          </div>
                          <p className="desc">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-card">
                        <div className="img-wrapper">
                          <div className="inner">
                            <div className="waves-top-sm">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                            <img
                              src="assets/images/hero.png"
                              width="82"
                              height="82"
                              alt=""
                            />
                            <div className="waves-bottom-sm">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <h3>James Smith</h3>
                          <div className="d-flex align-items-center gap-2 mb-4">
                            <p>website owner</p>
                            <p>--</p>
                            <span>www.websites.com</span>
                          </div>
                          <p className="desc">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-card">
                        <div className="img-wrapper">
                          <div className="inner">
                            <div className="waves-top-sm">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                            <img
                              src="assets/images/hero.png"
                              width="82"
                              height="82"
                              alt=""
                            />
                            <div className="waves-bottom-sm">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <h3>James Smith</h3>
                          <div className="d-flex align-items-center gap-2 mb-4">
                            <p>website owner</p>
                            <p>--</p>
                            <span>www.websites.com</span>
                          </div>
                          <p className="desc">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-card">
                        <div className="img-wrapper">
                          <div className="inner">
                            <div className="waves-top-sm">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                            <img
                              src="assets/images/hero.png"
                              width="82"
                              height="82"
                              alt=""
                            />
                            <div className="waves-bottom-sm">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <h3>James Smith</h3>
                          <div className="d-flex align-items-center gap-2 mb-4">
                            <p>website owner</p>
                            <p>--</p>
                            <span>www.websites.com</span>
                          </div>
                          <p className="desc">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between gap-4 align-items-center">
                  <div className="s-scrollbar flex-grow-1"></div>
                  <div className="d-flex gap-3">
                    <button className="testi-prev">
                      <i className="ph ph-arrow-left"></i>
                    </button>
                    <button className="testi-next">
                      <i className="ph ph-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <a
                  href="#contact"
                  className="d-flex gap-4 align-items-center next-chapter"
                >
                  <span className="page">09/10</span>
                  <span className="next">Next Chapter</span>
                  <i className="ph ph-arrow-elbow-right-down"></i>
                </a>
              </div>
            </section> */}

            {/* contact */}
            <section id="contact" className="contact section position-relative">
              <span className="section-title-overlay-text">contact</span>
              <div className="section-title text-capitalize">
                <h4>Let's get in touch</h4>
                <h2>Contact me</h2>
              </div>
              <div className="row pb-120 contact-items">
                <div className="row g-4">
                  <div className="col-sm-6 col-xl-4 col-xxl-3">
                    <div className="contact-item">
                      <div className="icon-box">
                        <i className="ph ph-phone-call"></i>
                      </div>
                      <p>+420 652 887 351</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4 col-xxl-3">
                    <div className="contact-item">
                      <div className="icon-box">
                        <i className="ph ph-envelope-open"></i>
                      </div>
                      <p>emily@devis.com</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4 col-xxl-3">
                    <div className="contact-item">
                      <div className="icon-box">
                        <i className="ph ph-map-pin"></i>
                      </div>
                      <p>4730 Crystal Springs Dr, Los Angeles, CA</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4 col-xxl-3 d-flex align-items-center">
                    <div className="d-flex gap-3 social-icons">
                      <a href="#">
                        <i className="ph ph-facebook-logo"></i>
                      </a>
                      <a href="#">
                        <i className="ph ph-linkedin-logo"></i>
                      </a>
                      <a href="#">
                        <i className="ph ph-twitter-logo"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <form id="contact-form" className="contact-form">
                <h4>Leave a Message</h4>
                <div className="row g-4 g-xl-5">
                  <div className="col-sm-6">
                    <label form="name">Name</label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label form="email">Email</label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      placeholder="Your e-mail"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label form="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      id="submit-btn"
                      className="submit-btn position-relative"
                    >
                      <div className="waves-top-md">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      submit
                      <div className="waves-bottom-md">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
              <div className="col mt-5 pt-5 next-chapter">
                <span className="page">10/10</span>
              </div>
            </section>

            {/* footer */}

            <footer>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      Copyright &copy; <span id="year"></span>. All rights
                      reserved
                    </p>
                  </div>
                  <div className="col-md-6 right">
                    <p>
                      Designed By <a href="#">Dhiraj Chauhan</a>
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </main>
      {/* color switcher */}
      {/* <div className="color-switcher">
        <button className="color-switcher-btn">
          <i className="ph ph-gear-six"></i>
        </button>
        <div className="pallets d-flex flex-column align-items-center gap-4 justify-content-center">
          <div className="d-flex flex-column gap-3">
            <div className="d-flex gap-3">
              <button
                style={{ backgroundColor: "#ffdb67" }}
                className="color-btn"
                data-color="255, 219, 103"
              ></button>
              <button
                style={{ backgroundColor: "#ff91fb" }}
                className="color-btn"
                data-color="255, 145, 251"
              ></button>
              <button
                style={{ backgroundColor: "#fdbb2e" }}
                className="color-btn"
                data-color="253, 187, 46"
              ></button>
            </div>
            <div className="d-flex gap-3">
              <button
                style={{ backgroundColor: "#eee8aa" }}
                className="color-btn"
                data-color="238, 232, 170"
              ></button>
              <button
                style={{ backgroundColor: "#00ffff" }}
                className="color-btn"
                data-color="0, 255, 255"
              ></button>
              <button
                style={{ backgroundColor: "#00fe9c" }}
                className="color-btn"
                data-color="0, 254, 156"
              ></button>
            </div>
          </div>
          <div className="d-flex gap-3 justify-content-between">
            <button className="px-3 ltr py-2 border-0">LTR</button>
            <button className="px-3 rtl py-2 border-0">RTL</button>
          </div>
          <div className="d-flex align-items-center gap-3">
            <label form="grained"> Grained BG </label>
            <input type="checkbox" id="grained" className="grained-checkbox" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HomePage;
