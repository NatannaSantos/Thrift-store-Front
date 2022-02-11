import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home/index.js";
import Login from "./pages/Login/index.js";
import Register from "./pages/Register/index.js";

export default function App() {

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path= '/register' element={<Register />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}