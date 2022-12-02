import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav>
      <ul>
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
      </ul>
    </nav>
  )
}

export default Navigation