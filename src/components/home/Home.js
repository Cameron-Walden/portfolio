import Skills from "../skills/Skills";

export default function Home({ resumeData, sharedData }) {
    return (
      <div>
        <Skills
          sharedSkills={sharedData.skills}
          resumeBasicInfo={resumeData.basic_info}
        /> 
      </div>
    );
}