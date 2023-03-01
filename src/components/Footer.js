import pudding from "../images/pudding.svg";
import homeLogo from "../images/homeLogo.svg";
import creditsLogo from "../images/creditsLogo.svg";
import particPageLogo from "../images/particPageLogo.svg";
import organPageLogo from "../images/organPageLogo.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__authors">
          <p className="footer__authors-text">
            Data Analysis by: Josh Greenburg Nare Chitturi
          </p>
          <p>Web Design by: Ian Dizney</p>
        </div>
        <div className="footer__container">
          <h3 className="footer__title">Code Pudding 2.0 2023</h3>
          <img
            src={pudding}
            alt="Logo of pudding"
            className="footer__pudding"
          />
        </div>
        <ul className="footer__links">
          <li className="footer__links-item">
            <a href="" className="footer__link">
              <img
                src={homeLogo}
                alt="Home page logo"
                className="footer__logo"
              />
              Home
            </a>
          </li>
          <li className="footer__links-item">
            <a href="" className="footer__link">
              <img
                src={organPageLogo}
                alt="Organizers page logo"
                className="footer__logo"
              />
              Organizers
            </a>
          </li>
          <li className="footer__links-item">
            <a href="" className="footer__link">
              <img
                src={particPageLogo}
                alt="Participants page logo"
                className="footer__logo"
              />
              Participants
            </a>
          </li>
          <li className="footer__links-item">
            <a href="" className="footer__link">
              <img
                src={creditsLogo}
                alt="Credits page logo"
                className="footer__logo"
              />
              Credits
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
