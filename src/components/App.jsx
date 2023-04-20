import './App.css'
import {NavBar} from './NavBar/NavBar.jsx'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export const App = () => {
  return (
    
    <div>

        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element= {<ItemListContainer/>} />
            <Route path='/category/:category' element= {<ItemListContainer/>}  />
            <Route path='/product/:id' element= {<ItemListContainer/>}  />
            <ItemDetailContainer />
            <ItemListContainer />
          </Routes>


        </BrowserRouter>
        
    </div>
  )
}


