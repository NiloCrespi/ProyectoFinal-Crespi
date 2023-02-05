import "./NavBar.css"
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import CartWidget from "./CartWidget/CartWidget";

function NavBar () {
    return (
        <nav>
            <ul>
                <NavItem to="/"><h1>KIUT</h1></NavItem>
                <NavItem><Link to="/category/Carteras">Carteras</Link></NavItem>
                <NavItem><Link to="/category/Accesorios">Accesorios</Link></NavItem>
                <NavItem>
                    <Link to="/cart">
                        <CartWidget></CartWidget>
                    </Link>
                </NavItem>
            </ul>
        </nav>
    );
}

export default NavBar;