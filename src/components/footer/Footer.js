import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import "./Footer.scss";

export default function Footer() {
  const { sharedData } = useContext(PortfolioContext)
  
  return (
    <footer>
        <div className="row">
          <div className="socials"> 
            {sharedData.basic_info?.social.map((network) => (
              <span key={network.name} className="m-4">
                  <a
                    href={network.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="network-url"
                  >
                    <i className={network.class}></i>
                  </a>
              </span>
            ))}
          </div>
        </div>
    </footer>
  );
}
