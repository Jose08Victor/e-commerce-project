import "./styles.css"
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../../context/shopContext"

export const NavBar = () => {
const [menu, setMenu] = useState("shop");
const { getTotalCartItems } = useContext(ShopContext);

    return (
        <header className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>SHOPPER</p>
            </div>

            <ul className="nav-menu">
                <li onClick={()=> {setMenu("shop")}}><Link to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=> {setMenu("mens")}}><Link to="/mens">Man</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=> {setMenu("womens")}}><Link to="/womens">Woman</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=> {setMenu("kids")}}><Link to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>

            <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="Cart Icon" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </header>
    )
}