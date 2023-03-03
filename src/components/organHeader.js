import headerImage from "../images/headerImage.png";

function OrganHeader() {
  return (
    <>
      <header className="header">
        <h1 className="header__title header__home">
          <span className="header__blue">Six</span> things you need to know
          before organzing a <span className="header__blue">speed dating</span>{" "}
          event:
        </h1>
        <img
          src={headerImage}
          alt="A couple sitting in a booth talking"
          className="header__image"
        />
      </header>
    </>
  );
}

export default OrganHeader;
