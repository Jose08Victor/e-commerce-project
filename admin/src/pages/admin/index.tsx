import { Route, Routes } from 'react-router-dom'
import { SideBar } from '../../components/sideBar'
import './styles.css'
import { AddProduct } from '../../components/addProduct'
import { ListProduct } from '../../components/listProduct'

export const Admin = () => {
    return (
        <div className="admin">
            <SideBar />

            <Routes>
                <Route path='/addproduct' element={<AddProduct />} />

                <Route path='/listproduct' element={<ListProduct />} />
            </Routes>
        </div>
    )
}