import insta from '/img/insta_icon.svg'
import linkedin from '/img/linkedin_icon.svg'
import whatsapp from '/img/whatsapp_icon.svg'

function Footer({position}) {
    return (
        <footer className={`${position}`}>
            <a href="https://www.instagram.com/v1aja_guerre1ro/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_blank'>
                <img src={insta} alt="instagram" title='instagram' />
            </a>
            <a href="https://www.linkedin.com/in/thiago-lacerda-375aa81b5/" target='_blank'>
                <img src={linkedin} alt='linkedin' title='linkedin'></img>
            </a>
            <a href="https://wa.me/5511946864603" target='_blank'>
                <img src={whatsapp} alt="whatsapp" title='whatsapp' />
            </a>
        </footer>
    )
}

export default Footer