import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import logo from '../src/assets/imgs/punto rojo.png'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from "./components/Nosotros/Nosotros";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <BrowserRouter>

    <div className="contenedor_pagina">
    
      <header>
        <img src={logo} className="header_logo" alt='logo'></img>
        <h1 className="titulo_header">Skincare Cero</h1>
      </header>

      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={ <ItemListContainer/> }/>
        <Route path='/nosotros' element={ <Nosotros /> }/>
        <Route path='/productos/:categoria' element={ <ItemListContainer/> }/>
        <Route path='/producto/:idProducto' element={ <ItemDetailContainer/> } />
      </Routes>
    

      <footer className="footer">Copyright &copy; Todos los derechos reservados</footer>

    </div>

    </BrowserRouter>

  );
}

export default App;
