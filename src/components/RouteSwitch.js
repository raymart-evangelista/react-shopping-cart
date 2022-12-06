import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App"
import Home from "./Home"
import Browse from "./Browse"
import Browse2 from "./Browse2";
import Navigation from "./Navigation";
import Catalog from "./Catalog"
import Item from "./Item"
import NotFound from "./NotFound"

const RouteSwitch = () => {

  const handleAdd = (gameName, gamePrice, gameId) => {
    console.log(gameName)
    console.log(gamePrice)
    console.log(gameId)
  }

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Item handleAddToCart={handleAdd} />} />
        {/* <Route path="/browse2" element={<Browse2 />} /> */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch