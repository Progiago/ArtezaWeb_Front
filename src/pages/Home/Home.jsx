import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import Searchbar from "../../components/Searchbar/Searchbar"
import Cards_Home from "../../components/Cards/Cards_Home/Cards_Home"
function Home(){
    return(
        <>
            <Navbar/>
            <Searchbar/>
            <div className="container">
                <Cards_Home/>
            </div>
            
        </>
    )
}

export default Home