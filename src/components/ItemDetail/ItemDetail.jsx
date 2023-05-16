import { ItemCount } from "../ItemCount/ItemCount"
import { useCarritoContext } from "../../context/CartContext"

export const ItemDetail = ({item}) => {
    const {addItem} = useCarritoContext()
    const onAdd = (contador)=>{
        addItem(item, contador)
    }
    
  return (
    <div className="row g-0">
        <div className="col-md-4">
           <img src={item.img} alt={`img de ${item.nombre} ${item.modelo}`} className="img-fluid rounded-start"/> 
        </div>
        
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">${item.nombre}</h5>
                <p className="card-text">modelo: {item.modelo}</p>
                <p className="card-text">precio: ${item.precio}</p>
                <p className="card-text">Stock: {item.stock}</p>
                <p className="card-text">Categoria: #{item.categoria}</p>
                <ItemCount valInicial={1} min={1} max={item.stock} onAdd={onAdd} />
            </div>
        </div>

    </div>
  )
}
