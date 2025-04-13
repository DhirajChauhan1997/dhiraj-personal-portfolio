import { FC, useEffect, useState } from "react";
import data from "../assets/data/dhiraj.json";
import ProjectItem from "./ProjectItem";

const ProjectComponent: FC = () => {
  const [projects, setProjects] = useState<any>([]);
  useEffect(() => {
    setProjects(data.projects);
    return () => {};
  }, []);

  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="sec-head custom-font">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Portfolio
          </h6>
          <h3 className="wow" data-splitting>
            Our Works.
          </h3>
          {/* <span className="tbg text-right">Portfolio</span> */}
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* filter links */}
          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".brand">Web App</span>
              <span data-filter=".web">Mobile App</span>
            </div>
          </div>

          {/* gallery */}
          <div className="gallery full-width" style={{ display: "contents" }}>
            {projects.map((item) => {
              return (
                <ProjectItem
                  name={item.name}
                  projectType={item.projectType}
                  technology={item.technologies}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;
