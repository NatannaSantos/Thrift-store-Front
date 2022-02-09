import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contexts from "./Contexts";

export default function App() {

    return (
        <Contexts.Provider value = {
            {
                
            }
        }>
            <BrowserRouter>
                <Routes>
                    
                </Routes>
            </BrowserRouter>
        </Contexts.Provider>
    )
}