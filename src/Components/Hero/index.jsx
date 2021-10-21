import {Component} from 'react'
// import backgroundhome from '../../Assets/backgroundhome.svg'
import './Hero.css'

class Hero extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="hero">
                <img src={this.props.cover} alt='hero background' className='hero__img' />
                <span className="hero__text">{this.props.isTextVisible ? "Chez vous, partout et ailleurs" : ''} </span> 
            </div>
        )
    }
}

// function Hero() {
//     return (
//         <div className="hero">
//             <img src={backgroundhome} alt='hero background' className='hero__img' />
//             <span className="hero__text">Chez vous, partout et ailleurs</span>
//         </div>
//     )
// }

export default Hero