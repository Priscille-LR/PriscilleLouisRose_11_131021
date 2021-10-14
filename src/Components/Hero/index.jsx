import backgroundhome from '../../Assets/backgroundhome.svg'
import '../Hero/Hero.css'

function Hero() {
    return (
        <div className="hero">
            <img src={backgroundhome} alt='hero background' className='hero__img' />
            <span className="hero__text">Chez vous, partout et ailleurs</span>
        </div>
    )
}

export default Hero