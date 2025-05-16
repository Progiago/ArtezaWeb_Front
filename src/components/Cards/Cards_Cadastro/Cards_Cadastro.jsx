import "./Cards_Cadastro.css"
import { useState } from "react";

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
            <h1>Cadastro</h1>
            <section className="cadastro-container">
                <div className="user-checkbox">
                    <div>
                        <label htmlFor="" >Artezao</label>
                        <input className="input1" type="checkbox" name="Artezao" id="Artezao" value="Artezao" checked={isChecked} onChange={handleOnChange} disabled={isCheckedd == true}/>
                        
                    </div>
                    <div>
                        <label htmlFor="" >Cliente</label>
                        <input className="input1" type="checkbox" name="Cliente" id="Cliente" value="Cliente" checked={isCheckedd} onChange={handleOnChangee} disabled={isChecked == true}/>
                    </div>
                </div>
                <hr />
                <div>
                    
                </div>
            </section>
        </>
    )
}

export default Cards_Cadastro