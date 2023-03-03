import headerImage from "../images/headerImage.png";
import Nav from "./nav";

function CreditsHeader() {
  return (
    <>
      <header className="header">
        <Nav />
        <div className="header__horizontal">
          <h1 className="header__title header__home">
            Thanks to those who provided images and logos!
          </h1>
          <img
            src={headerImage}
            alt="A couple sitting in a booth talking"
            className="header__image"
          />
        </div>
      </header>
    </>
  );
}

export default CreditsHeader;
