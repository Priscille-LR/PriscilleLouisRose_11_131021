import { Component } from 'react';
import '../Rating/Rating.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class Rating extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      const { rating } = this.props;
      const range = [1, 2, 3, 4, 5];

      return (
         <div className="rating">
            {range.map(
               (rangeEl) =>
                  rating >= rangeEl ? (
                     <FontAwesomeIcon
                        icon={faStar}
                        key={rangeEl}
                        style={{ color: '#FF6060' }}
                     />
                  ) : (
                     //   <i
                     //      class="fa-solid fa-star"
                     //      key={rangeEl}
                     //      style={{ color: '#FF6060' }}
                     //   ></i>
                     <FontAwesomeIcon
                        icon={faStar}
                        key={rangeEl}
                        style={{ color: '#E3E3E3' }}
                     />
                  )

               //   <i
               //      class="fa-regular fa-star"
               //      key={rangeEl}
               //      style={{ color: '#E3E3E3' }}
               //   ></i>
            )}
         </div>
      );
   }
}
export default Rating;
