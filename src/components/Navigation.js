import { Link } from "react-router-dom"
import "./Navigation.css"

const Navigation = ({cartCount}) => {
  return (
    <nav>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/browse">Browse</Link>
        </li>
        {/* <li>
          <Link to="/browse2">Browse2</Link>
        </li> */}
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cartCount})</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation