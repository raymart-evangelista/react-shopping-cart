import { useParams, useLocation } from "react-router-dom"

const Item = () => {
  const { id } = useParams()
  const location = useLocation()
  const gameData = location.state
  return (
    <>
      {console.log(gameData)}
      <h1>{gameData.name}</h1>
      <img src={gameData.background_image} alt="" />
      <img src={gameData.short_screenshots[0].image} alt="" />
      <img src={gameData.short_screenshots[1].image} alt="" />
      <img src={gameData.short_screenshots[2].image} alt="" />
      <img src={gameData.short_screenshots[3].image} alt="" />
      <img src={gameData.short_screenshots[4].image} alt="" />
      <img src={gameData.short_screenshots[5].image} alt="" />
      <img src={gameData.short_screenshots[6].image} alt="" />
    </>
  )
}

export default Item