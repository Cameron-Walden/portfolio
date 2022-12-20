import { useState } from "react";
import ProjectDetailsModal from "../projectDetailsModal/ProjectDetailsModal";
import "./Projects.scss";

export default function Projects({ resumeProjects, resumeBasicInfo }) {
  const [projectDescription, setProjectDescription] = useState({});
  const [detailsModalShow, setDetailsModalShow] = useState(false);

  const showModalDetails = (data) => {
    setDetailsModalShow({ detailsModalShow });
    setProjectDescription(data);
  };

  const closeModalDetails = () => {
    setDetailsModalShow(!detailsModalShow);
  };

  if (resumeProjects && resumeBasicInfo) {
    var sectionName = resumeBasicInfo.section_name.projects;
    var projects = resumeProjects.map((project) => (
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
          <span>{sectionName}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
        </div>
        <ProjectDetailsModal
          show={detailsModalShow}
          onHide={closeModalDetails}
          data={projectDescription}
        />
      </div>
    </section>
  );
}
