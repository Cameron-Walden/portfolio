import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import axios from "axios";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import "./App.scss";

export default function App() {
  const [resumeData, setResumeData] = useState({});
  const [sharedData, setSharedData] = useState({});

  const getProjectsAndSkills = () => {
    const resumePath = `projectsAndSkills.json`;
    loadResumeFromPath(resumePath);
  };

  const loadResumeFromPath = (path) => {
    axios(path)
      .then((response) => {
        setResumeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadPortfolioData = () => {
    const url = `portfolioData.json`;

    axios(url)
      .then((response) => {
        setSharedData(response.data);
        document.title = `${sharedData.basic_info.name}`;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    loadPortfolioData();
    getProjectsAndSkills();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Header sharedData={sharedData.basic_info} />
      <Switch>
        <Route exact path="/">
          <Home resumeData={resumeData} sharedData={sharedData} />
        </Route>
        <Route exact path="/projects">
          <Projects
            resumeProjects={resumeData.projects}
            resumeBasicInfo={resumeData.basic_info}
          />
        </Route>
        <Route exact path="/experience">
          <Experience
            resumeExperience={resumeData.experience}
            resumeBasicInfo={resumeData.basic_info}
          />
        </Route>
        <Route path="/about">
          <About
            resumeBasicInfo={resumeData.basic_info}
            sharedBasicInfo={sharedData.basic_info}
          />
        </Route>
      </Switch>
      <Footer
        sharedBasicInfo={sharedData.basic_info}
        getProjectsAndSkills={getProjectsAndSkills}
      />
    </Router>
  );
}
