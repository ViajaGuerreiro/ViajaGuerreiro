//react
import { Link } from 'react-router-dom'
import { useContext } from 'react'

//context
import { OpenNavContext } from '../../context/openNavContext'

//imagens
import Logo from '/img/LogoVG.png'

function NavBar() {
    const {openNav, toggleNav} = useContext(OpenNavContext)

    return (
        <header>
            <div className="logo_container">
                <img className='Logo' src={Logo} alt="Logo" title="Logo do site" />
            </div>
            <nav className={openNav ? 'active_nav' : ''}>
                <Link to='/'>Inicio</Link> {/* /ViajaGuerreiro */}
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/sobre">Sobre</Link>
            </nav>
            <div className={`Mobile ${openNav ? 'active_Mobile' : ''}`} onClick={toggleNav}>
                <div className='line1'></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </header>
    )
}

export default NavBar