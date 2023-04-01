import React from 'react'
import '../App.css'

export const CartWidget = ({cantCarrito}) => {
  
  return (
    <>
    CARRITO
    <i id='iconoCart' className='bi bi-cart2'></i>
        <p className='cantNum'>{cantCarrito}</p>
    </>
  )
}
