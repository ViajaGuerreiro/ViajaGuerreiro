import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Home from "../pages/home/Home";
import Porfolio from "../pages/Portfolio/Portfolio";
import Sobre from "../pages/Sobre/Sobre";

function Rotas() {
    return (
        <BrowserRouter>
            <>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    
                    <Route path="/portfolio" element={<Porfolio />}></Route>

                    <Route path="/sobre" element={<Sobre />}></Route>
                </Routes>
            </>
        </BrowserRouter>
    )
}

export default Rotas