import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import ItemCard from "./ItemCard"
import "./Catalog.css"
import uniqid from "uniqid"

const Catalog = () => {

  const [loading, setLoading] = useState(false)
  const [games, setGames] = useState([])
  const prices = [69.99, 29.99, 49.99, 89.99, 59.99, 99.99]

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
      // fs.writeFile('./api/games.txt', JSON.stringify(searchedData), function(err) {
      //   if(err) {
      //     return console.log(err)
      //   }
      //   console.log("The file was saved")
      // })

      const pricedGames = setPrices(searchedData.results)
      setGames(pricedGames)
    } catch (err) {
      console.log(`An error occurred: ${err}`)
    } finally {
      setLoading(false)
    }
  }

  // function createItemCards() {
  //   console.log('creating item cards...')
  //   const listItems = (games.map((game) =>
  //     <ItemCard key={uniqid()} game={game} />
  //   ))

    // setItemCards(listItems)
    
  // }

  const handleItemClick = (itemId, game) => {
  }

  const setPrices = (games) => {
    // const example = [{slug: 'persona'}, {slug: 'ersonal'}]
    // console.log(games)
    // console.log(example)
    // const new_example = example.map(each => ({
    //   ...each,
    //   price: prices[Math.floor(Math.random() * prices.length)]
    // }))

    // console.log(new_example)
    const pricedGames = games.map(game => ({
      ...game,
      // price: prices[Math.floor(Math.random() * prices.length)]
      price: 59.99
    }))

    return pricedGames
    // console.log(pricedGames)
    // setGames(pricedGames)
  }

  useEffect(() => {
    // fetchGames().then(createItemCards()).then(setDone(true))
    fetchGames()
    console.log(games)
    // return () => {
    //   console.log('cleanup--when component unmounts')
    // }
  }, [])

  return (
    <div>
      <p>{loading ? "Loading..." : 'not loading...'}</p>
      {/* {!loading && listItems} */}
      {/* {gameInfo && <ItemCard game={gameInfo}></ItemCard>} */}
      <div className="item-container">
        {!loading && games.map((game) =>
          <NavLink to={`${uniqid()}`} state={game}>
            <ItemCard key={uniqid()} itemId={uniqid()} game={game} handleClick={handleItemClick} />
          </NavLink>
        )}
        {/* <p>{loading ? "Loading..." : {itemCards}}</p> */}
      </div>
      
    </div>
  )
}

export default Catalog