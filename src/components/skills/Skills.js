import "./Skills.scss";

export default function Skills({ sharedSkills, resumeBasicInfo }) {
  if (sharedSkills && resumeBasicInfo) {
    var sectionName = resumeBasicInfo.section_name.skills;
    var skills = sharedSkills.icons.map((skills, i) => (
      <li className="list-inline-item mx-3" key={i}>
        <span>
          <div className="text-center skills-tile">
            <i className={skills.class} style={{ fontSize: "220%" }}>
              <p
                className="text-center"
                style={{ fontSize: "30%", marginTop: "4px" }}
              >
                {skills.name}
              </p>
            </i>
          </div>
        </span>
      </li>
    ));
  }

  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">{sectionName}</h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">{skills}</ul>
        </div>
      </div>
    </section>
  );
}
