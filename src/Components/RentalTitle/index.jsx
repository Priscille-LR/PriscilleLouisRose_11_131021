import React, { Component } from 'react';
import '../RentalTitle/RentalTitle.css';

class RentalTitle extends Component {
   render() {
      const { title, location } = this.props;

      return (
         <div>
            <h1 className="rental__title">{title}</h1>
            <h2 className="rental__location">{location}</h2>
         </div>
      );
   }
}

export default RentalTitle;
