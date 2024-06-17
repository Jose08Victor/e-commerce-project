import { Link } from "react-router-dom"
import "./styles.css"
import add_product_icon from "../../assets/Product_Cart.svg"
import list_product_icon from "../../assets/Product_list_icon.svg"

export const SideBar = () => {
    return (
        <div className="sidebar">
            <Link to={'/addproduct'}>
            <div className="sidebar-item">
                <img src={add_product_icon} alt="Add Product Icon" />

                <p>Add Product</p>
            </div>
            </ Link>

            <Link to={'/listproduct'}>
            <div className="sidebar-item">
                <img src={list_product_icon} alt="List Product Icon" />
                
                <p>Product List</p>
            </div>
            </ Link>
        </div>
    )
}