import insta from '/img/insta_icon.svg'
import linkedin from '/img/linkedin_icon.svg'
import whatsapp from '/img/whatsapp_icon.svg'

function Footer({position}) {
    return (
        <footer className={`${position}`}>
            <a href="">
                <img src={insta} alt="instagram" title='instagram' />
            </a>
            <a href="">
                <img src={linkedin} alt='linkedin' title='linkedin'></img>
            </a>
            <a href="">
                <img src={whatsapp} alt="whatsapp" title='whatsapp' />
            </a>
        </footer>
    )
}

export default Footer