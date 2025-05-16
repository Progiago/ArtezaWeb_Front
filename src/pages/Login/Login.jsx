import "./Login.css"
import Navbar from "../../components/Navbar/Navbar"
import Cards_Login from "../../components/Cards/Cards_Login/Cards_Login"
function Login(){
    return(
        <>
            <Navbar/>
            <div className="container-login">
                <Cards_Login/>
            </div>
            
        </>
    )
}

export default Login