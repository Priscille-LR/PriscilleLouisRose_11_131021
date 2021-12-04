import React, { Component } from 'react';
import starSolid from '../../Assets/star-solid.png';
import starEmpty from '../../Assets/star-empty.png';
import './Rating.css';

class Rating extends Component {
   render() {
      const { rating } = this.props;
      const range = [1, 2, 3, 4, 5];

      return (
         <div className="rating">
            {range.map((rangeEl) =>
               rating >= rangeEl ? (
                  <img key={rangeEl} src={starSolid} alt="rating" />
               ) : (
                  <img key={rangeEl} src={starEmpty} alt="rating" />
               )
            )}
         </div>
      );
   }
}
export default Rating;
