import React from 'react'
import './ItemListContainer.css'
import Titulo from './titulo/Titulo'

const ItemListContainer = () => {

  let greeting = "Bienvenidos a Zaion Cerveceria Artesanal"

  return (
    <div className="greeting">
      <Titulo greeting={ greeting }/>
    </div>
  )
}

export default ItemListContainer