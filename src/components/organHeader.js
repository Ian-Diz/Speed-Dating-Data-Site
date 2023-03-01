import HeaderImages from "./headerImages";

function OrganHeader() {
  return (
    <>
      <header className="header">
        <HeaderImages />
        <h1 className="header__title header__organ">
          Have You Ever Wanted to Host a Speed Dating Event?
        </h1>
        <h2 className="header__subtitle">
          Here’s all the information you need!
        </h2>
      </header>
    </>
  );
}

export default OrganHeader;
