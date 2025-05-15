import "./Navbar.css"
import { Link } from "react-router-dom"
import { CgProfile } from "react-icons/cg";


const Navbar = () =>{
    return(
        <nav className="nav">
            <Link><h1 className="logo">Logo</h1></Link>
            <div className="link-list">
                <Link className="link">almofadas</Link>
                <Link className="link">sapatos</Link>
                <Link className="link">decorativos</Link>
                <Link className="link"><CgProfile className="avatar" width={'40px'} height={'40px'}/></Link>
            </div>

        </nav>
    )
}


export default Navbar