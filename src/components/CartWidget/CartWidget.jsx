import { useCarritoContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import '../App.css'

export const CartWidget = () => {
  
  const {getItemQuantity} = useCarritoContext()

  return (
    <>
    <button className='botonCart'>
      <Link to='/cart'>
        CARRITO
        <i id='iconoCart' className='bi bi-cart2'></i>
        {getItemQuantity() > 0 && <span className='cantCarrito'>{getItemQuantity()}</span> }
      </Link>
    </button>
    
    </>
  )
}
