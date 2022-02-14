import './Footer.scss'

export default function Footer(props){

    // if (props.sharedBasicInfo) {
    //   var networks = props.sharedBasicInfo.social.map(network => (
    //       <span key={network.name} className="m-4">
    //         <a href={network.url} target="_blank" rel="noopener noreferrer">
    //           <i className={network.class}></i>
    //         </a>
    //       </span>
    //   ));
    // }

    return (
      <footer>
        <div className="container">
          <div className="row">
            {/* <div className="col social-links">{networks}</div> */}
            <div className="col">
            </div>
            <div className="col">
              <div className="copyright py-4 text-center">
                <div className="container">
                  {/* <small>
                    Copyright &copy;{" "}
                    {props.sharedBasicInfo
                      ? props.sharedBasicInfo.name
                      : "???"}
                  </small> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

