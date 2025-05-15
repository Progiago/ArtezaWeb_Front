import Navbar from "../../components/Navbar/Navbar";
import "./Home.css"
import homeimage from "../../assets/Homeimage2.jpg"
import SearchBar from "../../components/SearchBar/Searchbar";
import Section from "../../components/Section/Section";

export default function Home(title){
    return(
        <>
            <Navbar />
            <div className="search-container">
                <SearchBar />
            </div>
            
            <div section-title-container>
                <h3 className="section-title"> - {title="tendendias"}</h3>
                <Section/>
            </div>
        </>
    )
} 