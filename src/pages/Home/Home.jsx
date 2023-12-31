//react
import { Link } from 'react-router-dom'
import { useContext } from 'react'

//context
import { OpenNavContext } from '../../components/context/openNavContext'

//imagens
import apresentacao from '/img/apresentacao.svg'
import portfolio from '/img/portfolio.svg'
import sobre from '/img/sobre.svg'

//layout
import NavBar from "../../components/layout/NavBar/NavBar"
import Container from "../../components/layout/Container/Container"
import Footer from "../../components/layout/Footer/Footer"

function Home() {
    const {openNav} = useContext(OpenNavContext)
    
    return (
        <>
            <NavBar />
            <Container>
                <section className="home_section apresentacao">
                    <div>
                        <h2 className={openNav ? "active" : ""}><span>Olá,</span></h2>
                        <h2 className={openNav ? "active" : ""}>Seja bem Vindo</h2>
                        <h2 className={openNav ? "active" : ""}>Eu sou <span>Thiago</span></h2>
                    </div>
                 
                        <img className={openNav ? "activeNav" : ""} src={apresentacao} alt="" />
                  
                </section>

                <section className="home_section portfolio">
                    <img src={portfolio} alt="" />
                    <div>
                        <Link to="/portfolio">Confira meus projetos mais recentes <span>Clique</span> aqui para acessar meu portfólio!</Link>
                    </div>
                </section>

                <section className="home_section sobre">
                    <div>
                        <Link to="/sobre">Quer me conhecer melhor? Para saber mais sobre quem eu sou e como eu posso ajudar você a alcançar seus objetivos. <span>Clique</span> agora para descobrir mais!</Link>
                    </div>
                    <img src={sobre} alt="" />
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Home