import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
   render() {
      const { cover, isTextVisible } = this.props;

      return (
         <div className="hero">
            <img src={cover} alt="hero background" className="hero__img" />
            {isTextVisible ? (
               <p className="hero__text">Chez vous, partout et ailleurs</p>
            ) : (
               ''
            )}
         </div>
      );
   }
}

export default Hero;
