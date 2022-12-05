import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ItemCard from "./ItemCard"
import "./Catalog.css"
import uniqid from "uniqid"
// import fs from 'fs'

const Catalog = () => {

  const [loading, setLoading] = useState(false)
  const [gameSrc, setGameSrc] = useState(null)
  const [gameInfo, setGameInfo] = useState(null)
  const [games, setGames] = useState([])
  const [itemCards, setItemCards] = useState(null)

  async function fetchGames() {
    console.log(`fetching games...`)
    const API_ROOT = 'https://rawg.io/api'
    try {
      console.log('trying')
      setLoading(true)
      const accessKey = process.env.REACT_APP_RAWG_SECRET
      // const endpoint = `${API_ROOT}/games?key=${accessKey}&dates=2019-09-01,2019-09-30&platforms=18,1,7`
      // const endpoint = `${API_ROOT}/platforms?key=${accessKey}`
      // PS5 platform id=187
      const endpoint = `${API_ROOT}/games?key=${accessKey}&platforms=187&page_size=40&ordering=-metacritic`
      const response = await fetch(endpoint)
      const searchedData = await response.json()

      console.log(searchedData)
      
      // fs.writeFile('./api/games.txt', JSON.stringify(searchedData), function(err) {
      //   if(err) {
      //     return console.log(err)
      //   }
      //   console.log("The file was saved")
      // })

      setGames(searchedData.results)
    } catch (err) {
      console.log(`An error occurred: ${err}`)
    } finally {
      setLoading(false)
    }
  }

  function createItemCards() {
    console.log('creating item cards...')
    const listItems = (games.map((game) =>
      <ItemCard key={uniqid()} game={game} />
    ))

    setItemCards(listItems)
  }

  useEffect(() => {
    fetchGames().then(createItemCards())
    // return () => {
    //   console.log('cleanup--when component unmounts')
    // }
  }, [])



  return (
    <div>
      {/* <p>{loading ? "Loading..." : <img src={gameSrc} alt="image"/>}</p> */}
      {/* {!loading && listItems} */}
      {/* {gameInfo && <ItemCard game={gameInfo}></ItemCard>} */}
      <div className="item-container">
        {!loading && itemCards}
        {/* <p>{loading ? "Loading..." : {itemCards}}</p> */}
      </div>
    </div>
  )
}

export default Catalog