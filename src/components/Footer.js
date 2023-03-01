import pudding from "../images/pudding.svg";
import homeLogo from "../images/homeLogo.svg";
import creditsLogo from "../images/creditsLogo.svg";
import particPageLogo from "../images/particPageLogo.svg";
import organPageLogo from "../images/organPageLogo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__authors">
          <p className="footer__authors-text">
            Data Analysis by: Josh Greenburg Nare Chitturi
          </p>
          <p className="footer__authors-text">Web Design by: Ian Dizney</p>
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
            <Link to="/" className="footer__link">
              <img
                src={homeLogo}
                alt="Home page logo"
                className="footer__logo"
              />
              Home
            </Link>
          </li>
          <li className="footer__links-item">
            <Link to="/Organizers" className="footer__link">
              <img
                src={organPageLogo}
                alt="Organizers page logo"
                className="footer__logo"
              />
              Organizers
            </Link>
          </li>
          <li className="footer__links-item">
            <Link to="/Participants" className="footer__link">
              <img
                src={particPageLogo}
                alt="Participants page logo"
                className="footer__logo"
              />
              Participants
            </Link>
          </li>
          <li className="footer__links-item">
            <Link to="/Credits" className="footer__link">
              <img
                src={creditsLogo}
                alt="Credits page logo"
                className="footer__logo"
              />
              Credits
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
