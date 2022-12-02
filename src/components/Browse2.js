import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Browse2 = () => {

  const [search, setSearch] = useState('Rimworld')
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
      try {
        setLoading(true)
        const results = await fetch(`/.netlify/functions/gif-get?search=${search}`)
        console.log(results)
        const srcUrl = results.data.data.images.original.url
        setGiphy(srcUrl)
      } catch (error) {
        console.log(error)
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
      <h1>Browse2</h1>
      <h1>All Games</h1>
      <h1>6785 items</h1>
      <h1>
        <Link to='/game/1'>
          RimWorld
        </Link>
      </h1>
      <input onChange={updateInput} type="text" />
      <button onClick={getSearch}>Get a gif of something you searched</button>
      <p>{loading ? "Loading..." : <img src={giphy} alt={search}/>}</p>
    </div>
  )
}

export default Browse2