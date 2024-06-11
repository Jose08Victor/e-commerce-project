import { BrowserRouter } from 'react-router-dom'
import { Admin } from '../pages/admin'
import { NavBar } from '../components/navBar'

export const AppRoutes = () => {
   return (
      <BrowserRouter>
         <NavBar />
         <Admin />
      </BrowserRouter>
   )
}