import pudding from "../images/pudding.svg";
import homeLogo from "../images/homeLogo.svg";
import creditsLogo from "../images/creditsLogo.svg";
import particPageLogo from "../images/particPageLogo.svg";
import organPageLogo from "../images/organPageLogo.svg";
import { Link } from "react-router-dom";
import ScrollToTop from "./scrollToTop";

function Nav() {
  return (
    <>
      <ScrollToTop />
      <nav className="nav">
        <img src={pudding} alt="A pudding logo" className="nav__pudding" />
        <ul className="nav__links">
          <li className="nav__links-item">
            <Link to="/" className="nav__link">
              <img src={homeLogo} alt="Home page logo" className="nav__logo" />
              Home
            </Link>
          </li>
          <li className="nav__links-item">
            <Link to="/Participants" className="nav__link">
              <img
                src={particPageLogo}
                alt="Participants page logo"
                className="nav__logo"
              />
              Participants
            </Link>
          </li>
          <li className="nav__links-item">
            <Link to="/Organizers" className="nav__link">
              <img
                src={organPageLogo}
                alt="Organizers page logo"
                className="nav__logo"
              />
              Organizers
            </Link>
          </li>
          <li className="nav__links-item">
            <Link to="/Credits" className="nav__link">
              <img
                src={creditsLogo}
                alt="Credits page logo"
                className="nav__logo"
              />
              Credits
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
