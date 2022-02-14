import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Clothes } from "./pages/Clothes";
import { Eletronics } from "./pages/Eletronics";
import Home from "./pages/Home/index.js";
import { HomeProducts } from "./pages/HomeProducts/index.js";
import Login from "./pages/Login/index.js";
import Register from "./pages/Register/index.js";
import { Shoes } from "./pages/Shoes";
import ProductPage from "./pages/Home/Product/ProductPage";

export default function App() {

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/homeproducts' element={<HomeProducts/>} />
                    <Route path='/eletronics' element={<Eletronics/>} />
                    <Route path='/shoes' element={<Shoes/>} />
                    <Route path='/clothes' element={<Clothes/>} />
                    <Route path='/product' element={<ProductPage/>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}