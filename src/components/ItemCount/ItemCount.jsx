import { useCount } from "../../hooks/useCount";
 
export const ItemCount = ({valInicial, min, max, onAdd}) => {
    const {count, sum, minus, reset} = useCount(valInicial, min, max)

  return (
    <div>
        <button className="btn btn-dark" onClick={minus}>-</button>
        {count}
        <button className="btn btn-dark" onClick={sum}>+</button>
        <button className="btn btn-dark" onClick={reset}>reestablecer</button>
        <br />
        <br />
        <button className="btn btn-secondary" onClick={()=> onAdd(count)}> AGREGAR AL CARRITO</button>
    </div>
  )
}
