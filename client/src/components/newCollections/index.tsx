import "./styles.css"
import { Item } from "../item"
import { useEffect, useState } from "react"

export const NewCollections = () => {
    const [new_collection, setNew_Collections] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/newcollections')
            .then((response) => response.json())
            .then((data) => setNew_Collections(data));
    }, [])

    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>

            <hr />

            <div className="collections">
                {new_collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}