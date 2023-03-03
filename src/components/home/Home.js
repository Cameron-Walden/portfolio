import axios from 'axios';
import { PortfolioContext } from '../../context/PortfolioContext';
import { useContext, useEffect } from 'react';
import Skills from "../skills/Skills";

export default function Home() {
  const { setResumeData, setSharedData } = useContext(PortfolioContext)

  const getProjectsAndSkills = () => {
    const resumePath = `${process.env.PUBLIC_URL}/projectsAndSkills.json`;
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
    const url = `${process.env.PUBLIC_URL}/portfolioData.json`;

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
    <div>
      <Skills />
    </div>
  );
}
