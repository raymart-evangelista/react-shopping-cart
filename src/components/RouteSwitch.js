import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import App from "../App"
import Home from "./Home"
import Browse from "./Browse"
import Browse2 from "./Browse2";
import Navigation from "./Navigation";
import Catalog from "./Catalog"
import Item from "./Item"
import NotFound from "./NotFound"
import Cart from "./Cart";
import { useState } from "react";

const RouteSwitch = () => {

  const [cart, setCart] = useState([])

  const handleAdd = (gameName, gamePrice, gameId, gameImg) => {
    if (cart.find(item => item.id === gameId)) {
      console.log(`already exists in cart`)
    } else {
      setCart(cart.concat({
        name: gameName,
        price: gamePrice,
        id: gameId,
        img: gameImg
      }))
      console.log(`item added to cart`)
      console.log(cart)
    }
  }

  return (
    <BrowserRouter>
      <Navigation cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Item handleAddToCart={handleAdd} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        {/* <Route path="/browse2" element={<Browse2 />} /> */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch