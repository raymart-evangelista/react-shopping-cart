import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App"
import Home from "./Home"
import Browse from "./Browse"
import Browse2 from "./Browse2";
import Navigation from "./Navigation";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/browse2" element={<Browse2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch