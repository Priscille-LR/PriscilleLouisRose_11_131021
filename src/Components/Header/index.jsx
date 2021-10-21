import { Link } from 'react-router-dom';
import {Component} from 'react'
import logo from '../../Assets/logo.svg'
import '../Header/Header.css'


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="header">
              <Link to="/">
            <img src={logo} alt='Kasa' className='header__logo' />
             </Link>
             <div className="header__nav">
                 <Link to="/" className="header__nav__item">Accueil</Link>
                 <Link to="/a-propos" className="header__nav__item">A propos</Link>
             </div>
         </div>
        )
    }

}

// function Header() {
//     return (
//         <div className="header">
//              <Link to="/">
//             <img src={logo} alt='Kasa' className='header__logo' />
//             </Link>
//             <div className="header__nav">
//                 <Link to="/" className="header__nav__item">Accueil</Link>
//                 <Link to="/a-propos" className="header__nav__item">A propos</Link>
//             </div>
//         </div>
//     )
// }

export default Header