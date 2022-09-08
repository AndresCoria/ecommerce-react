import React from 'react'
import './ItemListContainer.css'
import Titulo from './titulo/Titulo'
import ItemCount from './Containers/itemCount/ItemCount'

const ItemListContainer = () => {

  let greeting = "Bienvenidos a Zaion Cerveceria Artesanal"

const onAdd = (cantidad) => {
  console.log(`Agregaste ${cantidad} items al carrito`)
}

  return (
    <div className="greeting">
      <Titulo greeting={ greeting }/>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer