import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

const Browse = () => {

  const [corgiImage, setCorgiImage] = useState(null)

  useEffect(() => {
    console.log('useEffect')

    // const { REACT_APP_GIPHY_KEY } = process.env
    // console.log(REACT_APP_GIPHY_KEY)
    
    const getGIPHY = async () => {
      const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_KEY}&s=corgi`, { mode: 'cors' })
      const corgiData = await response.json()
      const src = corgiData.data.images.original.url
      setCorgiImage(src)
      // console.log(corgiData.data.images.original.url)
    }

    // getGIPHY()

    return () => {
      console.log('cleanup--when component unmounts')
    }
  }, [])

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
      <img className="giphy" src={corgiImage} alt="Corgi"/>
    </div>
  )
}

export default Browse