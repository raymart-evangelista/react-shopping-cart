import { useEffect, useState } from "react"
import "./Cart.css"

const Cart = ({cart}) => {

  const [total, setTotal] = useState(null)

  useEffect(() => {
    const priceTotal = cart.reduce((total, item) => {
      return total + item.price
    }, 0)

    setTotal(priceTotal)
  }, [])

 return (
  <>
    {cart.map((item) =>
      <div>
        <h1>{item.name}</h1>
        <p>{item.price}</p>
        <img src={item.img} alt="" />
      </div>
    )}

    <h1>Total: ${total}</h1>
    <button>Checkout</button>
  </>
 ) 
}

export default Cart