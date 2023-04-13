import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import logo from '../src/assets/imgs/punto rojo.png'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nosotros from "./components/Nosotros/Nosotros";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext";
// import { Cart } from './components/Cart/Cart'
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";

function App() {



  return (
    <CartProvider>

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
        <Route path='/cart' element={ <Cart/> }/>
        <Route path='/checkout' element={ <Checkout/> }/>
        <Route path='*' element={ <Navigate to={"/"}/> }/>
      </Routes>
    

      <footer className="footer">Copyright &copy; Todos los derechos reservados</footer>

    </div>

    </BrowserRouter>

    </CartProvider>

  );
}

export default App;
