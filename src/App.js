import "./App.css";
// import Accordian from "./components/accordian";
// import RandomColor from "./components/random-color";
// import StarRating from "./components/star-rating";
// import ImageSlider from "./components/image-slider";
// import LoadMoreData from "./components/load-more-data";
// import TreeView from "./components/tree-view";
// import menus from "./components/tree-view/data.js";
// import QRCodeGenerator from "./components/qr-code-generator";
// import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";

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
      {/* <TreeView menus={menus}/> */}

      {/* QR Code Generator */}
      {/* <QRCodeGenerator /> */}

      {/* Light Dark mode */}
      {/* <LightDarkMode /> */}

      {/* Scroll indicator */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
