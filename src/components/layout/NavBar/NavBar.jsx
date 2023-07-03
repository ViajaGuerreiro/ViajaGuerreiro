import { Link } from 'react-router-dom'
import { useState } from 'react'

import Logo from '/img/vite.svg'

function NavBar() {
    const [openNav, setOpenNav] = useState(false)
    
    const handleNav = () => {
        setOpenNav(!openNav)
    }

    return (
        <header>
            <img className='Logo' src={Logo} alt="Logo" title="Logo do site" />
            <nav className={openNav ? 'active_nav' : ''}>
                <Link to='/ViajaGuerreiro'>Inicio</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/sobre">Sobre</Link>
            </nav>
            <div className={`Mobile ${openNav ? 'active_Mobile' : ''}`} onClick={handleNav}>
                <div className='line1'></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </header>
    )
}

export default NavBar