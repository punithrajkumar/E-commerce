import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
 import Navigationbar from "./Components/Navigation/Navigationbar";
import ImageCarousal from "./Components/Carousal/ImageCarousal";
import Cart from "./Components/Cart/Cart";
import ShopNow2 from "./Components/ShopNow/ShopNow2";

function App() {
  return (
    <div>
      <Navigationbar />
      <ImageCarousal />
      <ShopNow2/>
      <Cart />
    </div>
  );
}

export default App;
