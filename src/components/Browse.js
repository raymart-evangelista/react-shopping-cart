import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Browse = () => {

  const [search, setSearch] = useState('corgi')
  const [giphy, setGiphy] = useState(null)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('corgi')

  function getSearch() {
    setSearch(input)
  }

  function updateInput(e) {
    setInput(e.target.value)
  }

  useEffect(() => {
    console.log('useEffect')

    async function fetchGiphy() {
      const API_ROOT = 'https://api.giphy.com'
      try {
        setLoading(true)
        const accessKey = process.env.REACT_APP_GIPHY_SECRET
        const endpoint = `${API_ROOT}/v1/gifs/translate?api_key=${accessKey}&s=${search}`
        const response = await fetch(endpoint)
        const searchedData = await response.json()
        setGiphy(searchedData.data.images.original.url)
      } catch (err) {
        console.log(`An error occurred: ${err}`)
      } finally {
        setLoading(false)
      }
    }

    fetchGiphy()

    return () => {
      console.log('cleanup--when component unmounts')
    }
  }, [search])

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
      <input onChange={updateInput} type="text" />
      <button onClick={getSearch}>Get a gif of something you searched</button>
      <p>{loading ? "Loading..." : <img src={giphy} alt="Corgi"/>}</p>
    </div>
  )
}

export default Browse