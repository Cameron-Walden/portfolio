import { createContext, useState } from "react";

export const PortfolioContext = createContext();

export default function Context(props) {
  const [resumeData, setResumeData] = useState({});
  const [sharedData, setSharedData] = useState({});
  return (
    <PortfolioContext.Provider
      value={{ resumeData, setResumeData, sharedData, setSharedData }}
    >
      {props.children}
    </PortfolioContext.Provider>
  );
}
