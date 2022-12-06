import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import "./Item.css"

const Item = ({handleAddToCart}) => {
  // const [price, setPrice] = useState(prices[Math.floor(Math.random() * prices.length)])
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const gameData = location.state
  const images = gameData.short_screenshots
  const tags = gameData.tags
  const engTags = tags.filter((tag) => {
    return tag.language === 'eng'
  })
  return (
    <div className="main">
      <div className="item-image-container">
        {images.map((image) =>
          <img className="item-image" src={image.image} alt="" />
        )}
      </div>
      <div className="item-info-container">
        <h1>{gameData.name}</h1>
        <h1>Released: {gameData.released}</h1>
        <div className="tags">
          {engTags.map((tag) =>
            <p>{tag.name}</p>
          )}
        </div>
        <h1>${gameData.price}</h1>
        <button onClick={() => {
          navigate('/cart')
          handleAddToCart(gameData.name, gameData.price, gameData.id, images[0].image)}}
        >Add to cart</button>
      </div>
    </div>
  )
}

export default Item