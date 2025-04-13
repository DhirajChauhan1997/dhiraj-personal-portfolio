import { FC } from "react";
interface Props {
  name: string;
  projectType: string;
  technology: string;
}

const ProjectItem: FC<Props> = (props: Props) => {
  return (
    <div
      className="col-md-6 items graphic lg-mr wow fadeInUp"
      data-wow-delay=".4s"
    >
      <div className="item-img">
        <a href="#" className="imago wow">
          <img src="/img/portfolio/mas1/1.jpg" alt="image" />
          <div className="item-img-overlay"></div>
        </a>
      </div>
      <div className="cont">
        <span className="tags">
          <a href="#">{props.projectType}</a>,<a href="#">{props.technology}</a>
        </span>
        <h6>{props.name}</h6>
      </div>
    </div>
  );
};

export default ProjectItem;
