import { AiOutlineSearch } from "react-icons/ai"; // Import the search icon
import Image from "next/image";
import Logo from "../public/images/Logo.png";

export default function Header() {
    return (
        <header className="header"> 
            <div className="header__container">
                <div className="header__logo">
                    <a href="/">
                        <h2>Pixia</h2>    
                    </a>
                </div>
                <div className="header__content">
                    <form action="/action_page.php">
                        <input type="text" name="search" placeholder="Search anything here..." />
                        <button type="submit" className="header__content__btn"><AiOutlineSearch /></button> {/* Add the search icon */}
                    </form>
                </div>
            </div>
        </header>
    );
}
