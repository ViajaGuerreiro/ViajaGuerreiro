import { useContext, useState } from "react";
import { OpenNavContext } from "../../components/context/openNavContext";

//layout
import NavBar from "../../components/layout/NavBar/NavBar";
import Container from "../../components/layout/Container/Container"
import Footer from "../../components/layout/Footer/Footer";

import Slider from "../../components/others/Slider/Slider";

//imagens
import seta from '/img/seta.svg'
import teste1 from '/img/teste.jpg'
import teste2 from '/img/teste2.jpg'
import teste3 from '/img/teste3.jpg'


function Porfolio() {
    const [project, setProject] = useState(2)
    const {openNav} = useContext(OpenNavContext)

    function nextProject() {
        
    }
    switch (project) {
        case 1:
            console.log("imagem e texto  "+ project)
            break
        case 2:
            console.log("imagem e texto "+ project)
    }

    return (
        <>
            <NavBar />
            <Container>
                <section className="section_button">
                    <button className="anterior"><img src={seta} alt="anterior"/></button>
                    <button className="proximo"><img src={seta} alt="proximo" /></button>
                    <section className={`section_caroussel ${openNav ? "active" : ""}`}>
                        <Slider imagem_first={teste1} imagem_second={teste2} imagem_third={teste3} />
                    </section>
                    <section className="section_detalhes">
                        <h1>Titulo</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur similique error assumenda eos nostrum iusto veniam impedit dolorum ipsum tempore non in, sed porro qui ut earum provident consectetur.</p>
                        <a href="">Github.com.br/ViajaGuerreiro/title</a>
                        <a href="">www.title.com.br</a>
                    </section>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Porfolio