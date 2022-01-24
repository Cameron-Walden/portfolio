import { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

export default function Projects(props) {
  const [projectDescription, setProjectDescription] = useState({});
  const [detailsModalShow, setDetailsModalShow] = useState(false);

  const showModalDetails = data => {
    setDetailsModalShow({ detailsModalShow });
    setProjectDescription(data);
  };

  const closeModalDetails = () => {
    setDetailsModalShow(!detailsModalShow);
  };

  if (props.resumeProjects && props.resumeBasicInfo) {
    var sectionName = props.resumeBasicInfo.section_name.projects;
    var projects = props.resumeProjects.map(function (projects) {
      return (
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          key={projects.title}
          style={{ cursor: "pointer" }}
        >
          <span className="portfolio-item d-block">
            <div className="foto" onClick={() => showModalDetails(projects)}>
              <div>
                <img
                  src={projects.images[0]}
                  alt="projectImages"
                  height="230"
                  style={{
                    marginBottom: 0,
                    paddingBottom: 0,
                    position: "relative",
                  }}
                />
                <span className="project-date">{projects.startDate}</span>
                <br />
                <p className="project-title-settings mt-3">{projects.title}</p>
              </div>
            </div>
          </span>
        </div>
      );
    });
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
