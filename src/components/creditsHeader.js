import headerImage from "../images/headerImage.png";

function CreditsHeader() {
  return (
    <>
      <header className="header">
        <h1 className="header__title header__home">
          Thanks to those who provided images and logos!
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

export default CreditsHeader;
