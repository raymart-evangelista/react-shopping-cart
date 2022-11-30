import { Link } from "react-router-dom"

const Browse = () => {
  return (
    <div>
      <h1>Browse</h1>
      <h1>All Games</h1>
      <h1>6785 items</h1>
      <h1>
        <Link to='/game/1'>
          Call of Duty: Modern Warfare II
        </Link>
      </h1>
    </div>
  )
}

export default Browse