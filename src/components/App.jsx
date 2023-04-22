import './App.css'
import {NavBar} from './NavBar/NavBar.jsx'
import { CategoriaNavBar } from './CategoriaNavBar/CategoriaNavBar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Checkout } from './Checkout/Checkout'
export const App = () => {
  return (
    
    <div>
        <BrowserRouter>
          <NavBar />
          <CategoriaNavBar />
          <Routes>
            <Route path='/' element= {<ItemListContainer/>} />
            <Route path='/category/:category' element={<ItemListContainer/>}  />
            <Route path='/product/:id' element={<ItemDetailContainer/>}  />
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter> 
    </div>
  )
}


