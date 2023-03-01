import HeaderImages from "./headerImages";

function HomeHeader() {
  return (
    <>
      <header className="header">
        <HeaderImages />
        <h1 className="header__title header__home">
          Welcome to Our Website About Speed Dating!
        </h1>
      </header>
    </>
  );
}

export default HomeHeader;
