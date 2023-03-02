import headerImage from "../images/headerImage.png";

function ParticHeader() {
  return (
    <>
      <header className="header">
        <h1 className="header__title header__home">
          Here's everything you need to know before going to a speed dating
          event
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
export default ParticHeader;
