import "./Section.css"
import Cards from "../Cards/Cards"



export default function Section(title){
    return(
        <>
            
            <section className="section-container">
                
                <div className="card">
                    <Cards/>
                </div>
            </section>
        </>
    )
}