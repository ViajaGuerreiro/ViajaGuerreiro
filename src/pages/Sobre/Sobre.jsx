//layout
import NavBar from "../../components/layout/NavBar/NavBar"
import Container from "../../components/layout/Container/Container"
import Footer from "../../components/layout/Footer/Footer"

//imagem
import perfil from '/img/perfil.jpg'

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
                        <h1> Formação/Experiência </h1>
                        <p>Sou formado em Técnico de Análise e Desenvolvimento de Sistemas já realizei alguns trabalhos freelances, e alguns outros projetos voluntarios, atualmente sou professor e dou aulas para iniciantes em desenvolvimento web fullStack</p>

                        <h1>Tecnologias</h1>
                        <ul>
                            <li>Unreal Engine</li>
                            <li>Unity</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>NEXT</li>
                            <li>Node</li>
                            <li>Docker</li>
                            <li>MySQL</li>
                            <li>PHP</li>
                            <li>C#</li>
                            <li>GIT</li>
                            <li>Inglês Avançado</li>
                            <li>Pacote Office(Word, Excel, PowerPoint) básico</li>
                        </ul>

                        <h1> Sobre mim</h1>
                        <p>Sou uma pessoa extrovertida, muito curioso quando me interesso por algo me dedico muito para aprender tudo sobre o assunto gosto muito de tecnologia, sou bem adaptavel a novos ambientes, experiencia em lidar diretamente com clientes, atualmente busco me desenvolver mais em desenvolvimento de jogos utilizando alguns motores gráficos como Unreal Engine e Unity</p>

                    </div>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Sobre