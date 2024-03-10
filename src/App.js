import "./App.css";
import ImageSlider from "./components/image-slider";
// import Accordian from "./components/accordian";
// import RandomColor from "./components/random-color";
// import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* Accordian Account */}
      {/* <Accordian /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Star-rating component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image slider component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
