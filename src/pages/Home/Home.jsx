//react
import { Link } from 'react-router-dom'

//imagens
import apresentacao from '/img/apresentacao_blue_animated.gif'
import portfolio from '/img/portfolio_blue_animated.gif'
import sobre from '/img/sobre_blue_animated.gif'

//layout
import NavBar from "../../components/layout/NavBar/NavBar"
import Container from "../../components/layout/Container/Container"
import Footer from "../../components/layout/Footer/Footer"

function Home() {
    return (
        <>
            <NavBar />
            <Container>
                <section className="home_section apresentacao">
                    <div>
                        <h2><span>Olá,</span></h2>
                        <h2>Seja bem Vindo</h2>
                        <h2>Eu sou <span>Thiago Lacerda</span></h2>
                    </div>

                 
                        <img src={apresentacao} alt="" />
                  
                </section>

                <section className="home_section portfolio">
                    <img src={portfolio} alt="" />
                    <div>
                        <Link to="/portfolio">Confira meus projetos mais recentes em meu portfólio! <span>Clique</span> agora para ver como posso ajudar você a alcançar seus objetivos.</Link>
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