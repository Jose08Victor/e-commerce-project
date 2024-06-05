import "./styles.css"
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

export const ProductDisplay = (props: { product: any; }) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="Image" />
                    <img src={product.image} alt="Image" />
                    <img src={product.image} alt="Image" />
                    <img src={product.image} alt="Image" />
                </div>

                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="Image" />
                </div>
            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>

                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="Star Icon" />
                    <img src={star_icon} alt="Star Icon" />
                    <img src={star_icon} alt="Star Icon" />
                    <img src={star_icon} alt="Star Icon" />
                    <img src={star_dull_icon} alt="Star Dull Icon" />

                    <p>(122)</p>
                </div>

                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>

                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>

                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, iusto? Qui quis sed illo vero. Perferendis ea repellendus laboriosam quibusdam est, officiis deserunt culpa optio corrupti nihil. Aperiam, corporis aliquid?
                </div>

                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>

                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>

                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>

                <p className="product-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
                <p className="product-right-category"><span>Tags :</span>Modern, Latest</p>
            </div>
        </div>
    )
}