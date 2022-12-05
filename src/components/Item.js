import { useParams } from "react-router-dom"

const Item = () => {
  const { id } = useParams()
  return (
    <>
      <h1>Item {id}</h1>
    </>
  )
}

export default Item