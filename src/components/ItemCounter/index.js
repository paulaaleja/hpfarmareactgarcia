import React, {useState} from "react"
import './ItemCounter.css';

const ItemCounter = (props) => {
 
  const [items, setitems] = useState(0)
  
 
  const sumar = () => items < props.stock ? setitems (items + 1) : alert ('Se alcanzo el maximo')
  const restar = () => items > 0 ? setitems (items - 1) : alert ('No puede ingresar valores negativos')

return (

<>

<div className="cart">
  <h1 className="tengo">
Tengo {items} items. </h1>
<h2 className="cantidad"> Stock {props.stock}</h2>
<button onClick = {sumar}> sumar </button>
<button onClick = {restar}> restar </button>
</div>

</>
    
  )
}

export default ItemCounter