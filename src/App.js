import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PortfolioContext } from "./context/PortfolioContext";
import { useContext, useEffect } from "react";
import axios from 'axios';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import "./App.scss";


export default function App() {
  const { setResumeData, setSharedData } = useContext(PortfolioContext)

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
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/experience">
          <Experience />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
