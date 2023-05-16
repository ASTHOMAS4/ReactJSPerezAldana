import './App.css'
import { NavBar } from './NavBar/NavBar.jsx'
import { CategoriaNavBar } from './NavBar/CategoriaNavBar/CategoriaNavBar.jsx'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Checkout } from './Checkout/Checkout'
import { DarkModeProvider } from '../context/DarkModeContext.js'
import { Cart } from './Cart/Cart.jsx'

import { createProducts, getProducts } from '../firebase/firebase'

export const App = () => {
  //createProducts()
  return (

    <div>
      <BrowserRouter>
        <DarkModeProvider>
          <NavBar />
          <CategoriaNavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/product/:id' element={<ItemDetailContainer />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1> Error 401 Not Found </h1>} />
          </Routes>
        </DarkModeProvider>

      </BrowserRouter>
    </div>
  )
}


