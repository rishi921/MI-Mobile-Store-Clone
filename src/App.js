import "./App.css";
import PreNavbar from "./Components/PreNavbar";
import Navbar from "./Components/Navbar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./Components/Slider.js";
import data from "./data/data.json";
import Offers from "./Components/Offers.js";
import Heading from "./Components/Heading.js";
import StarProduct from "./Components/StarProduct.js";
import HotAccessoriesMenu from "./Components/HotAccessoriesMenu.js";
import HotAccessories from "./Components/HotAccessories.js";

function App() {
  const { banner } = data;
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Routes>
        <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />

        <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />

        <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />

        <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />

        <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>
    </Router>
  );
}


export default App;
