import "./Cards_Login.css"
import { Link } from "react-router-dom"

function Cards_Login(){
    return(
        <section className="container-login">
            <div className="login-card">
                <h2 className="login-title">Login</h2>
                <input className="inp-login" placeholder="Digite seu Usuario" type="text" />
                <h2 className="login-title"> Senha</h2>
                <input className="inp-login" placeholder="Digite sua Senha" type="text" />
                <p className="login-subtitle"><Link to="/">esqueceu a senha</Link></p>
                <button className="btn-login"><Link to={"/"}>Login</Link></button>
                <button className="btn-login-cadastro"><Link to={"/Cadastro"}>Cadastro</Link></button>
            </div>
        </section>
    )
}


export default Cards_Login