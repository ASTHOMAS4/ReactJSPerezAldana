import './App.css'
import {NavBar} from './NavBar/NavBar.jsx'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
export const App = () => {
  return (
    
    <div>
        <NavBar />
        <ItemListContainer greeting={"Lista de Productos"}/>
    </div>
  )
}


