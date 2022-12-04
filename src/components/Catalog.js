import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ItemCard from "./ItemCard"

const Catalog = () => {

  const [loading, setLoading] = useState(false)
  const [gameSrc, setGameSrc] = useState(null)
  const [gameInfo, setGameInfo] = useState(null)

  useEffect(() => {
    console.log('[Catalog] useEffect')

    async function fetchGames() {
      const API_ROOT = 'https://rawg.io/api'
      try {
        setLoading(true)
        const accessKey = process.env.REACT_APP_RAWG_SECRET
        // const endpoint = `${API_ROOT}/games?key=${accessKey}&dates=2019-09-01,2019-09-30&platforms=18,1,7`
        // const endpoint = `${API_ROOT}/platforms?key=${accessKey}`
        // PS5 platform id=187
        const endpoint = `${API_ROOT}/games?key=${accessKey}&platforms=187&page_size=40&ordering=-metacritic`
        const response = await fetch(endpoint)
        const searchedData = await response.json()
        console.log(searchedData.results)
        setGameSrc(searchedData.results[0].background_image)
        setGameInfo(searchedData.results[0])
      } catch (err) {
        console.log(`An error occurred: ${err}`)
      } finally {
        setLoading(false)
      }
    }

    fetchGames()

    return () => {
      console.log('cleanup--when component unmounts')
    }
  }, [])

  return (
    <div>
      <h1>This is catalog!</h1>
      {/* <p>{loading ? "Loading..." : <img src={gameSrc} alt="image"/>}</p> */}
      {gameInfo && <ItemCard game={gameInfo}></ItemCard>}
    </div>
  )
}

export default Catalog