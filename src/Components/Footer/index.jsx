import {Component} from 'react'
import logoFooter from '../../Assets/logo-footer.svg'
import '../Footer/Footer.css'


class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="footer">
                <img src={logoFooter} alt='Kasa' className='footer__logo'/>
                <span className="footer__copyright">© 2020 Kasa. All rights reserved</span>
            </div>
        )
    }

}

// function Footer() {
//     return (
//         <div className="footer">
//             <img src={logoFooter} alt='Kasa' className='footer__logo'/>
//             <span className="footer__copyright">© 2020 Kasa. All rights reserved</span>
//         </div>
//     )
// }

export default Footer