import HeaderImages from "./headerImages";

function ParticHeader() {
  return (
    <>
      <header className="header">
        <HeaderImages />
        <h1 className="header__title header__partic">
          Are You Interested in Participating in a Speed Dating Event?
        </h1>
        <h2 className="header__subtitle">
          Here’s everything you should know before going!
        </h2>
      </header>
    </>
  );
}

export default ParticHeader;
