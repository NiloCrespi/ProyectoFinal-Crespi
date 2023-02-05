import { Link } from "react-router-dom";

const NavItem = ({ to, children }) => {
    // text = {text: "Calzado"}
    return (
        <li>
            <Link to={to}>
                {children}
            </Link>
        </li>
    );
};

export default NavItem;
