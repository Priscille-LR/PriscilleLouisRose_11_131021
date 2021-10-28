import { Component } from 'react';
import '../Carousel/Carousel.css';
import chevronLeft from '../../Assets/chevron-left.png';
import chevronRight from '../../Assets/chevron-right.png';

class Carousel extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      const { picture } = this.props;
      return (
         <div className="carousel-wrapper">
            <button>
               <img src={chevronLeft} alt="" className="button-previous" />
            </button>
            <img src={picture} alt="rental" className="carousel__item" />
            <button>
               <img src={chevronRight} alt="" className="button-next" />
            </button>
         </div>
      );
   }
}

export default Carousel;
