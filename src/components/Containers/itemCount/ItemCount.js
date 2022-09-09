import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Image from './CERVEZA.jpg';

const ItemCount = ({initial, stock, onAdd}) =>  {
  const [count, setCount] = useState(initial);

  const aumentar = () => {
    setCount(count + 1)
  }

  const restar = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div className="d-flex justify-content-center">
          <div className="card w-25 mt-5">
              <div className="card-header">
              </div>
              <div className="card-body">
                  <img src={Image} alt="" className="w-50" />
              </div>
              <div className="card-footer d-flex justify-content-around">
                  <Button variant="danger" size="lg" onClick={restar} disabled={count <= 1}>-</Button>
                  <span>{count}</span>
                  <Button variant="dark" size="lg" onClick={aumentar} disabled={count >= stock}>+</Button>
              </div>
              <div>
                <Button variant="outline-info" disabled={stock <= 0} onClick={ () => onAdd(count) }>Agregar al carrito</Button>
              </div>
          </div>
      </div>
    </>
  )
}

export default ItemCount
