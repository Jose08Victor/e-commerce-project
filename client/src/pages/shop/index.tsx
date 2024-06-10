import { Hero } from "../../components/hero"
import { NewCollections } from "../../components/newCollections"
import { NewsLetter } from "../../components/newsLetter"
import { Offers } from "../../components/offers"
import { Popular } from "../../components/popular"

export const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections/>
            <NewsLetter />
        </div>
    )
}