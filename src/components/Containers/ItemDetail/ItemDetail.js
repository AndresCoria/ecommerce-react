import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css'

const ItemDetail = (props) => {


    return (
        <div className="container">
            <div className="contenedor-uno">
                <div className="card w-25 mt-5">
                    <div className="card-header">
                        {props.title}
                    </div>
                    <div className="card-body">
                        <img src={props.img} alt="" className="w-75" />
                    </div>
                    <div>{props.price}</div>
                    <div className="card-footer">
                        <button className="btn btn-outline-primary btn-block">
                        Detalle del Producto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail