import "./styles.css"

export const Item = (props: { id: number; image: string; name: string; new_price: number; old_price: number; }) => {
    return (
        <div className="item">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>

                <div className="item-price-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}