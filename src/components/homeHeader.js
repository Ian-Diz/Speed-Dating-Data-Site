import headerImage from "../images/headerImage.png";
import arrow from "../images/arrow.png";
import Nav from "./nav";

function HomeHeader() {
  return (
    <>
      <header className="header">
        <Nav />
        <div className="header__horizontal">
          <div className="header__container">
            <h1 className="header__title header__home">
              Valuable Insights about
              <span className="header__purple"> speed dating</span>:
            </h1>
            <img
              src={arrow}
              className="header__arrow"
              alt="An arrow pointing to another image"
            />
          </div>
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

export default HomeHeader;
