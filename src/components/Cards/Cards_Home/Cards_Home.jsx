import "./Cards_Home.css"



function Cards_Home(categoria,nome,valor,img){
    const card_home_dados = {
        id:1,
        img:'imagen qualquer',
        nome:"goiabada",
        descricao:"imaggakgamkfma",
        valor:29.12,

    }
    return(
        

        <>
        <h3>- {categoria='vestimentas'}</h3>
        <section className="card-home-container">
            {/* {card_home_dados.map((card)=> <div className="card-home" key={card.id}>{card.img}<h4>{card.nome}</h4><div className="card-overlay"><p>{card.valor}</p></div></div>)} */}
        </section>
        
        </>
    )
}


export default Cards_Home