import { useContext, useState } from "react";
import { OpenNavContext } from "../../components/context/openNavContext";

//layout
import NavBar from "../../components/layout/NavBar/NavBar";
import Container from "../../components/layout/Container/Container"
import Footer from "../../components/layout/Footer/Footer";

import Slider from "../../components/others/Slider/Slider";

//imagens
import seta from '/img/seta.svg'

//Pizzaria
/* Web */
import Pizza_1 from '/img/portfolio/PizzariaWeb/website1.png'
import Pizza_2 from '/img/portfolio/PizzariaWeb/website2.png'
import Pizza_3 from '/img/portfolio/PizzariaWeb/website3.png'
/* Mobile */
import Pizza_4 from '/img/portfolio/PizzariaWeb/website4.png'
import Pizza_5 from '/img/portfolio/PizzariaWeb/website5.png'
import Pizza_6 from '/img/portfolio/PizzariaWeb/website6.png'

//CTT300
/* Web */
import ctt300_1 from '/img/portfolio/Ctt300/website1.png'
import ctt300_2 from '/img/portfolio/Ctt300/website2.png'
import ctt300_3 from '/img/portfolio/Ctt300/website3.png'
/* Mobile */
import ctt300_4 from '/img/portfolio/Ctt300/website4.png'
import ctt300_5 from '/img/portfolio/Ctt300/website5.png'
import ctt300_6 from '/img/portfolio/Ctt300/website6.png'

//PokeNext
/* Web */
import PokeNext_1 from '/img/portfolio/PokeNext/website1.png'
import PokeNext_2 from '/img/portfolio/PokeNext/website2.png'
import PokeNext_3 from '/img/portfolio/PokeNext/website3.png'
/* Mobile */
import PokeNext_4 from '/img/portfolio/PokeNext/website4.png'
import PokeNext_5 from '/img/portfolio/PokeNext/website5.png'
import PokeNext_6 from '/img/portfolio/PokeNext/website6.png'

function Porfolio() {
    const {openNav} = useContext(OpenNavContext)
    
    const [project, setProject] = useState(0)
    //imagens
    const imgFirst = [innerWidth >= 800 ? Pizza_1 : Pizza_4, innerWidth >= 800 ? ctt300_1 : ctt300_4, innerWidth >= 800 ? PokeNext_1 : PokeNext_4]
    const imgSecond = [innerWidth >= 800 ? Pizza_2 : Pizza_5, innerWidth >= 800 ? ctt300_2 : ctt300_5, innerWidth >= 800 ? PokeNext_2 : PokeNext_5]
    const imgThird = [innerWidth >= 800 ? Pizza_3 : Pizza_6, innerWidth >= 800 ? ctt300_3 : ctt300_6, innerWidth >= 800 ? PokeNext_3 : PokeNext_6]
    //Titulos
    const title = ["Pizzaria", "CTT300", "PokeNext"]
    //Textos
    const texto = ["Pizzaria web é um projeto desenvolvido para os clientes fazerem os pedidos diretamente pelo site desenvolvido em HTML, CSS e JavaScript", "Desenvolvimento do site CTT300 para o estande de tiro de uma cliente, foi feito um Figma, e desenvolvido em HTML,CSS,javaScript e por ultimo hospedado", "PokeNext é um projeto desenvolvido em NEXT.Js totalmente responsiva consumidora de uma API, é uma PokeDesk Virtual, com informações sobre os pokemons"]
    //github
    const github = ["", "", "github.com/ViajaGuerreiro/pokenext"]
    //link
    const links = ["", "https://ctt300.com.br/index.html", "https://pokenext-blue.vercel.app"]

    function beforeProject() {
        if(project <= 0) {
            setProject(2)
        } else {
            setProject(prevCount => prevCount - 1)
        }
        
    }

    function nextProject() {
        if(project >= 2) {
            setProject(0)
        } else {
            setProject(prevCount => prevCount + 1)
        }
        
    }

    return (
        <>
            <NavBar />
            <Container>
                <section className="section_button">
                    <button className="anterior" onClick={beforeProject}><img src={seta} alt="anterior"/></button>
                    <button className="proximo" onClick={nextProject}><img src={seta} alt="proximo" /></button>
                    <section className={`section_caroussel ${openNav ? "active" : ""}`}>
                        <Slider imagem_first={imgFirst[project]} imagem_second={imgSecond[project]} imagem_third={imgThird[project]} />
                    </section>
                    <section className="section_detalhes">
                        <h1>{title[project]}</h1>
                        <p>{texto[project]}</p>
                        <a href={`${github[project]}`}>{github[project]}</a>
                        <a href={`${links[project]}`} target="_blank">{links[project]}</a>
                    </section>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Porfolio