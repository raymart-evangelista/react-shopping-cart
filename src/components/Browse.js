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

    // const { REACT_APP_GIPHY_KEY } = process.env
    // console.log(REACT_APP_GIPHY_KEY)
    
    // const getGIPHY = async () => {
    //   // const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_KEY}&s=corgi`, { mode: 'cors' })
    //   // const corgiData = await response.json()
    //   // const src = corgiData.data.images.original.url
    //   // setCorgiImage(src)
    // }

    // getGIPHY()

    async function fetchGiphy() {
      const url = `/.netlify/functions/getGif?search=${search}`
      try {
        setLoading(true)
        const gif = await fetch(url).then((response => response.json()))
        const src = gif.data.images.original.url
        setGiphy(src)
      } catch (err) {
        console.log(err)
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
      {/* <div>
        {loading
          ? <p>Loading</p>
          : <img className={setSearch('dog')} src={giphy} alt="Corgi"/>
        }
      </div> */}
      <p>{loading ? "Loading..." : <img src={giphy} alt="Corgi"/>}</p>
      {/* <img className={setSearch('dog')} src={giphy} alt="Corgi"/> */}
    </div>
  )
}

export default Browse