import React, { Component } from 'react';
import '../Collapse/Collapse.css';

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
            <div className="collapse__title__wrapper">
               <p className="collapse__title">{title}</p>
               <button
                  className="collapse__button"
                  onClick={this.handleToggleVisibility}
               >
                  {this.state.visibility ? (
                     <i className="fas fa-chevron-up fa-lg"></i>
                  ) : (
                     <i className="fas fa-chevron-down fa-lg"></i>
                  )}
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

// function Collapse({title, text}) {
//     return (
//         <div className="collapse-wrapper">
//             <div className="collapse__title">{title}</div>
//             <div className="collapse__text">{text}</div>
//         </div>
//     )
// }

export default Collapse;
