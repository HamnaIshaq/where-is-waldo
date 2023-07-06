import Flag from "../assets/images/flag.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <p className="m-0">Find the images:</p>
          <div className="flex align-center justify-center">
            <div className="flex">
              <div className="img-container">
                <img className="img" src={Flag} alt="flag" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
