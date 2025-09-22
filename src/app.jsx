export default function App() {
  return (
    <>
      <div className="header" id="header">
        {/*head left block*/}
        {/*Блок Spiralytics*/}
        <div style={{ display: "inline-block" }}>
          <a className="header__link--left" href="main.html">
            <div className="header__link--left_block">
              <div className="head-block">
                <img
                  className="head-img-main"
                  src="static/images/logo.png"
                  alt="logo"
                />
              </div>
              <div className="head-block">
                <p className="head-text-main">Spiralytics</p>
              </div>
            </div>
          </a>
          {/*Блок Charachters*/}
          <a className="header__link--left" href="characters.html">
            <div className="header__link--left_block header__link--left_block-min">
              <div className="head-block">
                <img
                  className="head-img"
                  src="static/images/char.png"
                  alt="charachters"
                />
              </div>
              <div className="head-block">
                <p className="head-text" id="head1">
                  Charachters
                </p>
              </div>
            </div>
          </a>
          {/*Блок Inventory*/}
          <a className="header__link--left" href="inventory.html">
            <div className="header__link--left_block header__link--left_block-min">
              <div className="head-block">
                <img
                  className="head-img"
                  src="static/images/Inventory.png"
                  alt="charachters"
                />
              </div>
              <div className="head-block">
                <p className="head-text" id="head2">
                  Inventory
                </p>
              </div>
            </div>
          </a>
          {/*Блок Archive*/}
          <a className="header__link--left" href="archive.html">
            <div className="header__link--left_block header__link--left_block-min">
              <div className="head-block">
                <img
                  className="head-img"
                  src="static/images/Archive.png"
                  alt="charachters"
                />
              </div>
              <div className="head-block">
                <p className="head-text" id="head3">
                  Archive
                </p>
              </div>
            </div>
          </a>
          {/*Блок Calculator*/}
          <a className="header__link--left" href="calculator.html">
            <div className="header__link--left_block header__link--left_block-min">
              <div className="head-block">
                <img
                  className="head-img"
                  src="static/images/Calculator.png"
                  alt="charachters"
                />
              </div>
              <div className="head-block">
                <p className="head-text" id="head4">
                  Calculator
                </p>
              </div>
            </div>
          </a>
        </div>
        {/*head right block*/}
        <div style={{ display: "flex", marginRight: 3 }}>
          {/*Блок language*/}
          <a className="head-anchor-right">
            <div className="right-header-element">
              <div className="head-block">
                <p className="head-lang-change-text">En</p>
              </div>
              <div
                style={{
                  display: "inline-block",
                  height: "100%",
                  verticalAlign: "top",
                }}
              >
                <img
                  className="head-lang-change-img"
                  src="static/images/arrow.png"
                  alt="arrowlang"
                />
              </div>
            </div>
          </a>
          {/*Блок theme*/}
          <a className="head-anchor-right" id="chanhgeTheme">
            <div className="right-header-element">
              <div className="head-block">
                <img
                  id="imgToggleTheme"
                  className="head-img"
                  src="static/images/dark_theme.png"
                  style={{ cursor: "pointer" }}
                  alt="dark_theme"
                />
                {/* <video
          style="height: 84%; padding: 8%; margin: 0"
          src="static/images/Композиция-1.gif"
        ></video> */}
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="site-background-dark" id="background" />
      {/*#e4e7df - light theme*/}
      <div className="main" id="main">
        <div className="main-header">
          <a
            className="cont-in-archive hov-main-header-block"
            href=""
            style={{
              display: "block",
              width: "100%",
              textDecoration: "none",
              color: "aliceblue",
              borderRadius: "20px 0 0 20px",
            }}
          >
            Charachters
          </a>
          <a
            className="cont-in-archive hov-main-header-block"
            href=""
            style={{
              display: "block",
              width: "100%",
              textDecoration: "none",
              color: "aliceblue",
            }}
          >
            Weapons
          </a>
          <a
            className="cont-in-archive hov-main-header-block"
            href=""
            style={{
              display: "block",
              width: "100%",
              textDecoration: "none",
              color: "aliceblue",
            }}
          >
            Artifacts
          </a>
          <a
            className="cont-in-archive hov-main-header-block"
            href=""
            style={{
              display: "block",
              width: "100%",
              textDecoration: "none",
              color: "aliceblue",
            }}
          >
            Enemies
          </a>
          <a
            className="cont-in-archive hov-main-header-block"
            href=""
            style={{
              display: "block",
              width: "100%",
              textDecoration: "none",
              color: "aliceblue",
              borderRadius: "0 20px 20px 0",
            }}
          >
            Materials
          </a>
        </div>
        <div className="grid-container-characters" />
        <div
          id="root"
          style={{
            display: "inline-block",
            width: "100%",
            color: "aliceblue",
            fontSize: "max(3.5vh, 20px)",
            textAlign: "center",
          }}
        >
          Last updates
        </div>
        <ul id="user-list" />
      </div>
    </>
  );
}
