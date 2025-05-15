import "./SearchBar.css";
import homeimage from "../../assets/Homeimage2.jpg"

const SearchBar = () => {
    return(
        <div className="home-container">
            <div className="img-container">
                <img className="home-image" src={homeimage} alt="imagen da tela principal"/>
            </div>
            <div className="search-bar">
                <textarea className="textarea"></textarea>
            </div>
        </div>
    )
}


export default SearchBar