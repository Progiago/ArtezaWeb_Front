import "./Cards_Cadastro.css"
import { useState } from "react";
import { Link } from "react-router-dom";

function Cards_Cadastro() {
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedd, setIsCheckedd] = useState(false)
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    }
    const handleOnChangee = () => {
        setIsCheckedd(!isCheckedd);
    }



    return (

        <>
            <section className="container-section-cadastro">
                <h1>Cadastro</h1>
                <div className="cadastro-container">
                    <div className="user-checkbox">
                        <div>
                            <label htmlFor="" >Artezao</label>
                            <input className="input1" type="checkbox" name="Artezao" id="Artezao" value="Artezao" checked={isChecked} onChange={handleOnChange} disabled={isCheckedd == true} />

                        </div>
                        <div>
                            <label htmlFor="" >Cliente</label>
                            <input className="input1" type="checkbox" name="Cliente" id="Cliente" value="Cliente" checked={isCheckedd} onChange={handleOnChangee} disabled={isChecked == true} />
                        </div>
                    </div>
                    <hr />
                    <div className="inp-container-cadastro">
                        <div className="label-inp">
                            <label htmlFor="">Nome Completo</label>
                            <input />
                        </div>
                        <div className="label-inp">
                            <label htmlFor="">Data de Nascimento</label>
                            <input type="text" />
                        </div>
                        <div className="label-inp">
                            <label htmlFor="">cpf ou cnpj</label>
                            <input type="text" />
                        </div>
                        <div className="label-inp">
                            <label htmlFor="">pais</label>
                            <input type="text" />
                        </div>
                        <div className="label-inp">
                            <label htmlFor="">cidade</label>
                            <input type="text" />
                        </div>
                        <div className="label-inp">
                            <label htmlFor="">email</label>
                            <input type="text" />
                        </div>
                        <div className="label-inp">
                            <label htmlFor="">Cep</label>
                            <input type="text" />
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className="label-inp">
                            <label htmlFor="">Usuario</label>
                            <input />
                        </div>
                        <div className="label-inp">
                            <label htmlFor="">Senha</label>
                            <input type="text" />
                        </div>
                        <div className="label-inp">
                            <label htmlFor="">Repita a senha</label>
                            <input type="text" />
                        </div>
                    </div>

                </div>
                <button className="btn-cadastrar" type="button"><Link>Cadastrar</Link></button>
            </section>
        </>
    )
}

export default Cards_Cadastro