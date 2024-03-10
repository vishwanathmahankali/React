import "./App.css";
// import Accordian from "./components/accordian";
// import RandomColor from "./components/random-color";
// import StarRating from "./components/star-rating";
// import ImageSlider from "./components/image-slider";
// import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data.js";

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
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* load more products */}
      {/* <LoadMoreData /> */}

      {/* Tree View / Menu UI / Recursive navigation menu */}
      <TreeView menus={menus}/>
    </div>
  );
}

export default App;
