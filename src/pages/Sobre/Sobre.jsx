//layout
import NavBar from "../../components/layout/NavBar/NavBar"
import Container from "../../components/layout/Container/Container"
import Footer from "../../components/layout/Footer/Footer"

//imagem
import perfil from '/img/teste.jpg'

function Sobre() {
    return (
        <>
            <NavBar />
            <Container>
                <section className="sobre_section">
                    <div className="perfil_img">
                        <img src={perfil} alt="Thiago Lacerda" title="Thiago Lacerda" />
                    </div>
                    <div className="about">
                        <h1>Sobre Mim</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolores eaque mollitia earum eligendi illo facilis, tempora tenetur quia debitis sint hic optio ullam saepe odit, officia recusandae reiciendis porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere provident, quaerat incidunt numquam recusandae soluta qui quo debitis rem illo, perferendis placeat ducimus eius beatae, exercitationem ipsum iste molestias perspiciatis.</p>
                    </div>
                </section>
            </Container>
            <Footer position="position_footer" />
        </>
    )
}

export default Sobre