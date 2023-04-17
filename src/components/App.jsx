import './App.css'
import {NavBar} from './NavBar/NavBar.jsx'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
import { Dolar } from './Dolar/Dolar.jsx'


export const App = () => {
  return (
    
    <div>
      
        <NavBar />
        {/* </> */}
        <ItemListContainer />
        <Dolar/>
    </div>
  )
}


