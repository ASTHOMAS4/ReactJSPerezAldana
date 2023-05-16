import { Link } from "react-router-dom"
import { memo } from "react"
import './CategoriaNavBar.css'

export const CategoriaNavBar = memo( () => {
  return (
    <div className="contCategorias">
        <ul>

            <li><Link to={`/`}>TODOS LOS PRODUCTOS</Link></li>
            <li><Link to={`/category/accs&deco`}>ACCS & DECO</Link></li>            
            <li><Link to={`/category/funkos`}>FUNKOS</Link></li>
            <li><Link to={`/category/juegos`}>JUEGOS</Link></li>            
            <li><Link to={`/category/juguetes`}>JUGUETES</Link></li>           
            <li><Link to={`/category/ropa`}>ROPA</Link></li>
            <li><Link to={"/category/tazas&vasos"}>TAZAS & VASOS</Link></li>
            
        </ul>
    </div>
  )
})
