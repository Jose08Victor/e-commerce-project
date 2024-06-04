import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from '../components/navbar'
import { Shop } from '../pages/Shop'
import { Cart } from '../pages/Cart'
import { Product } from '../pages/product'
import { ShopCategory } from '../pages/shopCategory'
import { LoginSignUp } from '../pages/loginSignUp'
import { Footer } from '../components/footer'
import men_banner from '../assets/banner_mens.png'
import women_banner from '../assets/banner_women.png'
import kid_banner from '../assets/banner_kids.png'

export function AppRoutes() {
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path='/' element={<Shop />} />

                <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
                <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
                <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />

                <Route path='/product' element={<Product />}>
                    <Route path=':productId' element={<Product />} />
                </Route >

                <Route path='/cart' element={<Cart />} />

                <Route path='/login' element={<LoginSignUp />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}