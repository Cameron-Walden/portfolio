import { createContext, useState } from "react";

export const PortfolioContext = createContext();

export default function Context(props) {
  const [resumeData, setResumeData] = useState({});
  const [sharedData, setSharedData] = useState({});
  const [projectDescription, setProjectDescription] = useState({});
  const [detailsModalShow, setDetailsModalShow] = useState(false);

  return (
    <PortfolioContext.Provider
      value={{
        resumeData,
        setResumeData,
        sharedData,
        setSharedData,
        projectDescription,
        setProjectDescription,
        detailsModalShow,
        setDetailsModalShow
      }}
    >
      {props.children}
    </PortfolioContext.Provider>
  );
}
