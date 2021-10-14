import logoFooter from '../../Assets/logo-footer.svg'
import '../Footer/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <img src={logoFooter} alt='Kasa' className='footer__logo'/>
            <span className="footer__copyright">© 2020 Kasa. All rights reserved</span>
        </div>
    )
}

export default Footer