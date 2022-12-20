import "./Footer.scss";

export default function Footer({ sharedBasicInfo }) {

  return (
    <footer>
        <div className="row">
          <div className="socials"> 
            {sharedBasicInfo?.social.map((network) => (
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
