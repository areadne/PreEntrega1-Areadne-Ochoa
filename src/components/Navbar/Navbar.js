import "./Navbar.css";
import { CartWidget } from '../CartWidget/CartWidget'

export const Navbar = () => {
  return (

    <nav className="navbar_container">
      <p className="link_navbar">Link 1</p>
      <p className="link_navbar">Link 2</p>
      <p className="link_navbar">Link 3</p>
      
      <CartWidget/>
    </nav>
    
  );
};
