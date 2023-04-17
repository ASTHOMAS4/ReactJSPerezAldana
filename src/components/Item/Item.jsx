import React from 'react'

export const Item = ({item}) => {
    console.log(item)

  return (
    <div className="card" style={{width: '18rem'}}>
        <img src={item.img} className="card-img-top" alt= {`Imagen de ${item.nombre} ${item.modelo}`} />
        <div className="card-body">
          <h5 className="card-title">{item.nombre} {item.modelo}</h5>
          <p className="card-text">Precio: ${item.precio}</p>
          <p className="card-text">Stock: {item.stock}</p>
          <a href="#" className="btn btn-primary">AÑADIR AL CARRO</a>
        </div>
    </div>
  )
}