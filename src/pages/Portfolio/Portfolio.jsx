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
import Pizza_1 from '/img/portfolio/PizzariaWeb/webSite1.png'
import Pizza_2 from '/img/portfolio/PizzariaWeb/website2.png'
import Pizza_3 from '/img/portfolio/PizzariaWeb/website3.png'

//CTT300
import ctt300_1 from '/img/portfolio/Ctt300/website1.png'
import ctt300_2 from '/img/portfolio/Ctt300/website2.png'
import ctt300_3 from '/img/portfolio/Ctt300/website3.png'

//PokeNext
import PokeNext_1 from '/img/portfolio/PokeNext/website1.png'
import PokeNext_2 from '/img/portfolio/PokeNext/website2.png'
import PokeNext_3 from '/img/portfolio/PokeNext/website3.png'




function Porfolio() {
    const {openNav} = useContext(OpenNavContext)
    
    const [project, setProject] = useState(0)
    //imagens
    const imgFirst = [Pizza_1, ctt300_1, PokeNext_1]
    const imgSecond = [Pizza_2, ctt300_2, PokeNext_2]
    const imgThird = [Pizza_3, ctt300_3, PokeNext_3]
    //Titulos
    const title = ["Pizzaria", "CTT300", "PokeNext"]
    //Textos
    const texto = ["Pizzaria web é um projeto desenvolvido para os clientes fazerem os pedidos diretamente pelo site desenvolvido em HTML, CSS e JavaScript", "Desenvolvimento do site CTT300 para o estande de tiro de uma cliente, foi feito um Figma, e desenvolvido em HTML,CSS,javaScript e por ultimo hospedado", "PokeNext é um projeto desenvolvido em NEXT.Js totalmente responsiva consumidora de uma API, é uma PokeDesk Virtual, com informações sobre os pokemons"]
    //github
    const github = ["", "", "https://github.com/ViajaGuerreiro/pokenext"]
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