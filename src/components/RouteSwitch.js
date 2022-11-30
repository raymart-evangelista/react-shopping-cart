import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App"
import Home from "./Home"
import Browse from "./Browse"
import Navigation from "./Navigation";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch