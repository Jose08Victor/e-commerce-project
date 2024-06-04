import "./styles.css"
import arrow_icon from "../../assets/breadcrum_arrow.png"

export const BreadCrum = (props: { product: any; }) => {
    const {product} = props;

    return (
        <div className="breadcrum">
            HOME <img src={arrow_icon} alt="Arrow Icon" /> SHOP <img src={arrow_icon} alt="Arrow Icon" /> {product.category} <img src={arrow_icon} alt="Arrow Icon" /> {product.name}
        </div>
    )
}