import React, { Component } from 'react';
import './Collapse.css';

class Collapse extends Component {
   constructor(props) {
      super(props);
      this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
      this.state = {
         visibility: false,
      };
   }

   handleToggleVisibility() {
      this.setState((prevState) => {
         return {
            visibility: !prevState.visibility,
         };
      });
   }

   render() {
      const { title, text } = this.props;
      const { visibility } = this.state;

      return (
         <div className="collapse">
            <div
               onClick={this.handleToggleVisibility}
               className="collapse__title__wrapper"
            >
               <p className="collapse__title">{title}</p>
               <button className="collapse__button">
                  <i
                     className={
                        this.state.visibility
                           ? 'fas fa-chevron-down fa-lg expanded'
                           : 'fas fa-chevron-down fa-lg closed'
                     }
                  ></i>
               </button>
            </div>

            {visibility &&
               (Array.isArray(text) ? (
                  <ul className="collapse__text">
                     {text.map((element, index) => (
                        <li key={index}>{element}</li>
                     ))}
                  </ul>
               ) : (
                  <div className="collapse__text">{text}</div>
               ))}
         </div>
      );
   }
}

export default Collapse;
