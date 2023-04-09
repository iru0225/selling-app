import Header from "./components/header"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home"
import Orders from "./pages/orders"
import Customers from "./pages/customers"
import Products from "./pages/products"
import CreateOrder from "./pages/create-order"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/orders" Component={Orders}/>
        <Route path="/customers" Component={Customers}/>
        <Route path="/products" Component={Products}/>
        <Route path="/create-order" Component={CreateOrder}/>
      </Routes>
    </>
  )
}

export default App
