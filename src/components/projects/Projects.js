import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import ProjectDetailsModal from "../projectDetailsModal/ProjectDetailsModal";
import "./Projects.scss";

export default function Projects() {
  const { resumeData, setProjectDescription, setDetailsModalShow } =
    useContext(PortfolioContext);

  const showModalDetails = (data) => {
    setDetailsModalShow(true);
    setProjectDescription(data);
  };

  if (resumeData) {
    var sectionName = resumeData?.basic_info?.section_name.projects;
    var projects = resumeData?.projects?.map((project) => (
      <div
        className="col-sm-12 col-md-6 col-lg-4"
        key={project.title}
        style={{ cursor: "pointer" }}
      >
        <span className="portfolio-item d-block">
          <div className="foto" onClick={() => showModalDetails(project)}>
            <div>
              <img
                src={project.images[0]}
                alt="projectImages"
                height="230"
                style={{
                  marginBottom: 0,
                  paddingBottom: 0,
                  position: "relative",
                }}
              />
              <span className="project-date">{project.startDate}</span>
              <br />
              <p className="project-title-settings mt-3">{project.title}</p>
            </div>
          </div>
        </span>
      </div>
    ));
  }

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <p>{sectionName}</p>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
        </div>
        <ProjectDetailsModal />
      </div>
    </section>
  );
}
