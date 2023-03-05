import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import logo from '../src/assets/imgs/punto rojo.png'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (

    <div className="contenedor_pagina">
    
      <header>
        <img src={logo} className="header_logo" alt='logo'></img>
        <h1 className="titulo_header">Skincare Cero</h1>
      </header>

      <div>
        <Navbar />
      </div>

      <div className="contenedor_productos">
        <ItemListContainer saludo={"hola (cumpliendo con la consigna)"}/>
      </div>

      <footer className="footer">Copyright &copy; Todos los derechos reservados</footer>

    </div>

  );
}

export default App;
