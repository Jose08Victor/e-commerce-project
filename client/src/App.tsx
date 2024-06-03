import './App.css'
import { ShopContextProvider } from './context/shopContext'
import { AppRoutes } from './routes'

function App() {
  return (
    <ShopContextProvider>
      <AppRoutes />
    </ShopContextProvider>
  )
}

export default App
