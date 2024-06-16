import "./styles.css"
import navLogo from "../../assets/nav-logo.svg"
import navProfile from "../../assets/nav-profile.svg"

export const NavBar = () => {
    return (
        <div className="navbar">
            <img className="nav-logo" src={navLogo} alt="Nav Logo" />
            <img className="nav-profile" src={navProfile} alt="Nav Profile" />
        </div>
    )
}