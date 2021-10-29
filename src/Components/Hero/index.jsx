import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
   render() {
      return (
         <div className="hero">
            <img
               src={this.props.cover}
               alt="hero background"
               className="hero__img"
            />
            {this.props.isTextVisible ? (
               <p className="hero__text">Chez vous, partout et ailleurs</p>
            ) : (
               ''
            )}
         </div>
      );
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

export default Hero;
