import wizardexLogo from "../../images/Wizardex.png";
import harryPotterLogo from "../../images/Harry.png";

function Header() {

    return (
        <header className="header">
           <img src={wizardexLogo} alt="Wizardex" className="header__logo" />
            <img src={harryPotterLogo} alt="Harry Potter" className="header__brand" />

        </header>
    );
}

export default Header