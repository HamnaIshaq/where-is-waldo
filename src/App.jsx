import "./assets/style.css";

const App = () => {
  const onClickCheckImage = (e) => {
    // min and max percentage values of image to found
    const minX = 45;
    const minY = 12;

    const maxX = 47;
    const maxY = 19;

    // clicked coord in percentage
    const X = Math.floor((e.clientX / window.innerWidth) * 100);
    const Y = Math.floor((e.clientY / window.innerHeight) * 100);

    console.log("(", X, Y, ")");

    // check if the image was clicked
    if (X >= minX && Y >= minY && X <= maxX && Y <= maxY) {
      console.log("image found");
    } else {
      console.log("keep looking");
    }
  };

  return (
    <>
      <main>
        <img
          className="waldo-pic"
          src="/wheres_waldo.jpg"
          alt="where is waldo style image"
          onClick={onClickCheckImage}
        />
      </main>
    </>
  );
};

export default App;
