import { useContext } from "react"
import "./styles.css"
import { ShopContext } from "../../context/shopContext"
import dropdown_icon from '../../assets/dropdown_icon.png'
import { Item } from "../../components/item"

export const ShopCategory = (props: { banner: string | undefined; category: string }) => {
    const { all_product } = useContext(ShopContext);

    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="Banner" />
            <div className="shopcategory-indexSort">
                <p><span>Showing 1-12</span> out of 36 products</p>

                <div className="shopcategory-sort">
                    <img src={dropdown_icon} alt="Dropdown Icon" />
                </div>
            </div>

            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    } 
                })}
            </div>

            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    )
}