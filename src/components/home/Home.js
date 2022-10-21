import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Experience from "../experience/Experience";

export default function Home({ resumeData, sharedData }) {
    return (
      <div>
        <Projects
          resumeProjects={resumeData.projects}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Skills
          sharedSkills={sharedData.skills}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Experience
          resumeExperience={resumeData.experience}
          resumeBasicInfo={resumeData.basic_info}
        />
      </div>
    );
}