import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RentalCard.css';

class RentalCard extends Component {
   render() {
      const { id, cover, title } = this.props;
      return (
         <article key={id} className="rental-card">
            <img className="rental-card__img" alt="rental" src={cover} />
            <span className="rental-card__title">{title}</span>
         </article>
      );
   }
}

export default RentalCard;

RentalCard.propTypes = {
   id: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   cover: PropTypes.string.isRequired,
};
