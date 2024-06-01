import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from '../components/navbar'
import { Shop } from '../pages/Shop'
import { Cart } from '../pages/Cart'
import { Product } from '../pages/Product'
import { ShopCategory } from '../pages/ShopCategory'
import { LoginSignup } from '../pages/LoginSignup'

export function AppRoutes() {
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path='/' element={<Shop />} />

                <Route path='/mens' element={<ShopCategory category="mens" />} />
                <Route path='/womens' element={<ShopCategory category="womens" />} />
                <Route path='/kids' element={<ShopCategory category="kids" />} />

                <Route path='/product' element={<Product />}>
                    <Route path=':productId' element={<Product />} />
                </Route >

                <Route path='/cart' element={<Cart />} />

                <Route path='/login' element={<LoginSignup />} />
            </Routes>
        </BrowserRouter>
    )
}