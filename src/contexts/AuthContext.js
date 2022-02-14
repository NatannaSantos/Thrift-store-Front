import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState();
  const [selectedProduct, setSelectedProduct] = useState('');
  const [product, setProduct] = useState('');
  const [cart, setCart] = useState([]);

  function login(authData) {
    setAuth(authData);
   }
  
  return (
    <AuthContext.Provider value={{ auth, login, selectedProduct, setSelectedProduct, product, setProduct, cart, setCart }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;