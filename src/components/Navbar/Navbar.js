import "./Navbar.css";
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (

    <nav className="navbar_container">
      <Link to='/productos/cabello' className="link_navbar">Cabello</Link>
      <Link to='/productos/rostro' className="link_navbar">Rostro</Link>
      <Link to='/nosotros' className="link_navbar">Nosotros</Link>
      
      <CartWidget/>
    </nav>
    
  );
};
