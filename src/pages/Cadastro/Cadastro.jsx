import "./Cadastro.css"
import Navbar from "../../components/Navbar/Navbar"
import Cards_Cadastro from "../../components/Cards/Cards_Cadastro/Cards_Cadastro"
function Cadastro(){
    return(
        <>
            <Navbar/>
            <div className="container">
                <Cards_Cadastro/>
            </div>
        </>
    )
}


export default Cadastro