import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Catalog = () => {

  const [loading, setLoading] = useState(false)
  const [game, setGame] = useState(null)

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
        setGame(searchedData.results[0])
        console.log(game.background_image)
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
      <p>{loading ? "Loading..." : <img src={game.background_image} alt="image"/>}</p>
    </div>
  )
}

export default Catalog