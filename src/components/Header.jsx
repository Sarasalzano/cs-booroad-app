import "../styles/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                
                <Link to="/"><img className="logo" src="public/img/booroad_logo.PNG" alt="Logo Bootrip" /></Link>
            </div>
        </header>
    )
}