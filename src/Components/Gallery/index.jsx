import React, { Component } from 'react';
import '../Gallery/Gallery.css';
import chevronLeft from '../../Assets/chevron-left.png';
import chevronRight from '../../Assets/chevron-right.png';

class Gallery extends Component {
   constructor(props) {
      super(props);
      this.showPreviousPicture = this.showPreviousPicture.bind(this);
      this.showNextPicture = this.showNextPicture.bind(this);
      this.state = { pictureIndex: 0 };
   }

   render() {
      const { pictures } = this.props;
      const { pictureIndex } = this.state;
      const currentIndex = pictureIndex;

      if (!Array.isArray(pictures) || pictures.length <= 0) {
         //if there's no data or if it's not an array
         return null;
      }

      return (
         <div className="gallery-wrapper">
            {pictures.length > 1 ? (
               <img
                  src={chevronLeft}
                  alt="show previous picture"
                  className="button-previous"
                  onClick={this.showPreviousPicture}
               />
            ) : null}

            {pictures.length > 1 ? (
               <img
                  src={chevronRight}
                  alt="show next picture"
                  className="button-next"
                  onClick={this.showNextPicture}
               />
            ) : null}

            {pictures.map((picture, index) => {
               return (
                  <div
                     className={
                        index === currentIndex
                           ? 'gallery__item active'
                           : 'gallery__item'
                     }
                     key={index}
                  >
                     {index === currentIndex && (
                        <img src={picture} alt="rental" className="picture" />
                     )}
                  </div>
               );
            })}
         </div>
      );

      // return (
      //    <div className="gallery-wrapper">
      //       {pictures.length > 1 ? (
      //          <button onClick={this.showPreviousPicture}>
      //             <img
      //                src={chevronLeft}
      //                alt="show previous picture"
      //                className="button-previous"
      //             />
      //          </button>
      //       ) : null}

      //       <img
      //          src={pictures[pictureIndex]}
      //          alt="rental"
      //          className={
      //             pictureIndex === currentIndex
      //                ? 'gallery__item active'
      //                : 'gallery__item'
      //          }
      //       />

      //       {pictures.length > 1 ? (
      //          <button onClick={this.showNextPicture}>
      //             <img
      //                src={chevronRight}
      //                alt="show next picture"
      //                className="button-next"
      //             />
      //          </button>
      //       ) : null}
      //    </div>
      // );
   }

   showPreviousPicture() {
      const { pictures } = this.props;
      const { pictureIndex } = this.state;
      const currentIndex = pictureIndex;

      if (currentIndex === 0) {
         this.setState({ pictureIndex: pictures.length - 1 }); //back to the last image
      } else {
         this.setState({ pictureIndex: currentIndex - 1 }); //prev image
      }
   }

   showNextPicture() {
      const { pictures } = this.props;
      const { pictureIndex } = this.state;
      const currentIndex = pictureIndex;

      if (currentIndex === pictures.length - 1) {
         this.setState({ pictureIndex: 0 }); //back to the 1st image
      } else {
         this.setState({ pictureIndex: currentIndex + 1 }); //next image
      }
   }
}

export default Gallery;
