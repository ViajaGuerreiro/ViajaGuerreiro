import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Home from "../pages/Home/Home.jsx";
import Porfolio from "../pages/Portfolio/Portfolio.jsx";
import Sobre from "../pages/Sobre/Sobre.jsx";

function Rotas() {
    return (
        <BrowserRouter>
            <>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    
                    <Route path="/portfolio" element={<Porfolio />}></Route>

                    <Route path="/sobre" element={<Sobre />}></Route>

                    <Route path="*" element={<Home />}></Route>
                </Routes>
            </>
        </BrowserRouter>
    )
}

export default Rotas