import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";


function Navbar(){
    return(
        <nav className="container">
            <h1><Link>Logo</Link></h1>
            <div className="link-list">
                <Link className="link" to='/'>Almofadas</Link>
                <Link className="link" to='/'>sapatos</Link>
                <Link className="link" to='/'>decorativos</Link> 
                <Link className="link" to='/Login'><FaUserCircle className="icon" /></Link>
                
            </div>
        </nav>
    )
}

export default Navbar