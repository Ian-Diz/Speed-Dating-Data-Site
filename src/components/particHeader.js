import headerImage from "../images/headerImage.png";
import Nav from "./nav";

function ParticHeader() {
  return (
    <>
      <header className="header">
        <Nav />
        <div className="header__horizontal">
          <h1 className="header__title header__home">
            <span className="header__red">Nine</span> things you need to know
            before going to a <span className="header__red">speed dating</span>{" "}
            event:
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
export default ParticHeader;
