import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'

import './App.css'


function App() {

  return (
    <>
      <div>
       <NavBar />
       <ItemListContainer bienvenida = "Bienvenido a la tienda no oficial de NOB"/>
      </div>
    </>
  )
}

export default App
