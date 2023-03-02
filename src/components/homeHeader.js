import headerImage from "../images/headerImage.png";
import arrow from "../images/arrow.png";

function HomeHeader() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1 className="header__title header__home">
            Valueable Insights about
            <span className="header__color">speed dating</span>
          </h1>
          <img
            src={arrow}
            className="header__arrow"
            alt="An arrow pointing to the other image"
          />
        </div>
        <img
          src={headerImage}
          alt="A couple sitting in a booth talking"
          className="header__image"
        />
      </header>
    </>
  );
}

export default HomeHeader;
