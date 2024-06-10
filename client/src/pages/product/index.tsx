import { useContext } from "react"
import "./styles.css"
import { ShopContext } from "../../context/shopContext"
import { useParams } from "react-router-dom";
import { BreadCrum } from "../../components/breadCrum";
import { ProductDisplay } from "../../components/productDisplay";
import { DescriptionBox } from "../../components/descriptionBox";
import { RelatedProducts } from "../../components/relatedProducts";

export const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    return (
        <div>
            <BreadCrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
}