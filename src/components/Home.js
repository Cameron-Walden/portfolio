import React from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";

export default function Home(props) {
    return (
      <div>
        <Projects
          resumeProjects={props.resumeData.projects}
          resumeBasicInfo={props.resumeData.basic_info}
        />
        <Skills
          sharedSkills={props.sharedData.skills}
          resumeBasicInfo={props.resumeData.basic_info}
        />
        <Experience
          resumeExperience={props.resumeData.experience}
          resumeBasicInfo={props.resumeData.basic_info}
        />
      </div>
    );
}