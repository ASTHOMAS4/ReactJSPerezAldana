import React from 'react'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
export const ItemListContainer = ({ greeting }) => {
/*
  const BDD = [
    {
      "id": 1,
      "categoria": "funkos",
      "nombre": "Funko",
      "modelo": "Jerry",
      "precio": 1000,
      "stock": 20,
      "img": "img/1-funko-jerry.jpg"

    },
    {
      "id": 2,
      "categoria": "funkos",
      "nombre": "Funko",
      "modelo": "Scary Terry",
      "precio": 1000,
      "stock": 20,
      "img": "img/2-funko-scary-terry.jpg"

    },
    {
      "id": 3,
      "categoria": "funkos",
      "nombre": "Funko",
      "modelo": "Summer",
      "precio": 1000,
      "stock": 20,
      "img": "img/3-funko-summer.jpg"

    },
    {
      "id": 4,
      "categoria": "funkos",
      "nombre": "Funko",
      "modelo": "Unity",
      "precio": 1000,
      "stock": 20,
      "img": "img/4-funko-unidad.jpg"

    },
    {
      "id": 5,
      "categoria": "juguetes",
      "nombre": "Figura de Acción",
      "modelo": "Jerry",
      "precio": 1000,
      "stock": 20,
      "img": "img/5-jerry-action.jpg"

    },
    {
      "id": 6,
      "categoria": "juguetes",
      "nombre": "Pistola de Portales",
      "modelo": "U",
      "precio": 1000,
      "stock": 20,
      "img": "img/6-pistola-portales.jpg"

    },
    {
      "id": 7,
      "categoria": "juguetes",
      "nombre": "Cargador",
      "modelo": "Morty",
      "precio": 1000,
      "stock": 20,
      "img": "img/7-cargador-morty.jpg"

    },
    {
      "id": 8,
      "categoria": "ropa",
      "nombre": "Calcetines",
      "modelo": "R&M talle U",
      "precio": 1000,
      "stock": 20,
      "img": "img/8-medias-rym1.jpg"

    },
    {
      "id": 9,
      "categoria": "ropa",
      "nombre": "Calcetines",
      "modelo": "Rick talle U",
      "precio": 1000,
      "stock": 20,
      "img": "img/9-medias-rick2.jpg"

    },
    {
      "id": 10,
      "categoria": "ropa",
      "nombre": "Pantuflas",
      "modelo": "R&M talle U",
      "precio": 1000,
      "stock": 20,
      "img": "img/10-pantunflas-rick-morty.jpg"

    },
    {
      "id": 11,
      "categoria": "accs&deco",
      "nombre": "Pin",
      "modelo": "Pickle Rick",
      "precio": 1000,
      "stock": 20,
      "img": "img/11-pin-pikle.jpg"

    },
    {
      "id": 12,
      "categoria": "accs&deco",
      "nombre": "Llaveros",
      "modelo": "Sorpresa",
      "precio": 1000,
      "stock": 20,
      "img": "img/12-llaveros.jpg"

    },
    {
      "id": 13,
      "categoria": "accs&deco",
      "nombre": "Cuadro",
      "modelo": "Pickle Rick",
      "precio": 1000,
      "stock": 20,
      "img": "img/13-mock-up-pickle-rick.jpg"

    },
    {
      "id": 14,
      "categoria": "accs&deco",
      "nombre": "Cuadro",
      "modelo": "Portal de Aventura",
      "precio": 1000,
      "stock": 20,
      "img": "img/14-poster-enmarcado.jpg"

    },
    {
      "id": 15,
      "categoria": "juguetes",
      "nombre": "Cards Set",
      "modelo": "Mr. Meeseks Box",
      "precio": 1000,
      "stock": 20,
      "img": "img/15-meeseks-caja.jpg"

    },
    {
      "id": 16,
      "categoria": "juguetes",
      "nombre": "Monopoly",
      "modelo": "R&M",
      "precio": 1000,
      "stock": 20,
      "img": "img/16-monopoly-rick-moty.jpg"

    },
    {
      "id": 17,
      "categoria": "tazas&vasos",
      "nombre": "Taza",
      "modelo": "Plumbus",
      "precio": 1000,
      "stock": 20,
      "img": "img/17-plumbus-taza.jpg"

    },
    {
      "id": 18,
      "categoria": "tazas&vasos",
      "nombre": "Taza",
      "modelo": "Pickle Rick",
      "precio": 1000,
      "stock": 20,
      "img": "img/18-taza-pickle-rick.jpg"

    },
    {
      "id": 19,
      "categoria": "tazas&vasos",
      "nombre": "Taza",
      "modelo": "R&M",
      "precio": 1000,
      "stock": 20,
      "img": "img/19-taza-rick-morty.jpg"

    },
    {
      "id": 20,
      "categoria": "tazas&vasos",
      "nombre": "Termo",
      "modelo": "Rick",
      "precio": 1000,
      "stock": 20,
      "img": "img/20-termo-rick.jpg"

    }

  ]
*/

  const [productos, setProductos] = useState([])
  /*
  useEffect(() => {
    const promesa = () => new Promise((res, rej) => {
      if (true) {
        return res(BDD)
      }
      return rej("No posee los permisos necesarios")
    })
    promesa()
      .then(productos => {
        const items = <ItemList productos={productos} />
        setProductos(items) 
      })
      .catch(error => console.error(error)
    
  )
}, [])*/

useEffect(()=>{
  fetch('./json/productos.json')
  .then(response => response.json())
  .then(productos=>{
    const productosFiltrados = productos.filter(prod =>prod.stock > 0)
    setProductos(productosFiltrados)
  })
},[])

return (
  <div className='row'>
    <ItemList productos= {productos}/>
  </div>
)
}
