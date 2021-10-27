import { Component } from 'react';
import '../Carousel/Carousel.css';

class Carousel extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      const { picture } = this.props;
      return (
         <div className="carousel-wrapper">
            <img src={picture} alt="rental" className="carousel-item" />
         </div>
      );
   }
}

export default Carousel;
