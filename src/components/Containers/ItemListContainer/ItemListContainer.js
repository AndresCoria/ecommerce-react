import React, { useState, useEffect } from 'react'
import { gFetch } from "../../Item/Item"
import ItemDetail from "../ItemDetail/ItemDetail"
import Titulo from '../../titulo/Titulo'
import ItemCount from '../itemCount/ItemCount'
import '../ItemListContainer/ItemListContainer.css'


const ItemListContainer = () => {

  const [ items, setItems ] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect( () => {
      gFetch
      .then(res => setItems(res))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])
  console.log(items)

  let greeting = "Bienvenidos a Zaion Cerveceria Artesanal"

const onAdd = (cantidad) => {
  console.log(`Agregaste ${cantidad} items al carrito`)
}

  return (
    <div className="greeting">
      <Titulo greeting={ greeting }/>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        { loading ?
            <h2>Cargando...</h2>
            :
            items.map(prod =>(
              <ItemDetail key={prod.id} price={prod.price} img={prod.img} title={prod.title} />
            ))
        }
    </div>

  )
}

export default ItemListContainer