import React from 'react'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { Link } from 'react-router-dom'
import { CategoriaNavBar } from '../CategoriaNavBar/CategoriaNavBar'
import { useParams } from 'react-router-dom'
export const ItemListContainer = ({ greeting }) => {
 
  const [productos, setProductos] = useState([])
  
  const {category} = useParams()
  useEffect(() => {
    if (category) {
      fetch('../json/productos.json')
        .then(response => response.json())
        .then(productos => {
          const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.categoria === (category))
          setProductos(productosFiltrados)
        })
    }else{
      fetch('./json/productos.json')
      .then(response => response.json())
      .then(productos => {
        const productosFiltrados = productos.filter(prod => prod.stock > 0)
        setProductos(productosFiltrados)
      })
    }
    
  }, [category])

  return (
    <div className='row containerProds'>
      <ItemList productos={productos} />
    </div>
  )
}
