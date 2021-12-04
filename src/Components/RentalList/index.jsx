import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RentalCard from '../RentalCard/index.jsx';
import './RentalList.css';

const rentals = '/data.json';

class RentalList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         rentalData: [],
      };
   }

   componentDidMount() {
      fetch(rentals)
         .then((response) => response.json())
         .then((data) => {
            this.setState({ rentalData: data });
         });
   }

   render() {
      const { rentalData } = this.state;

      if (rentalData.length === 0) {
         return null;
      }

      return (
         <div className="rental-list">
            {rentalData.map(({ id, title, cover }) => (
               <Link key={`location-${id}`} to={`/location/${id}`}>
                  <RentalCard id={id} title={title} cover={cover} />
               </Link>
            ))}
         </div>
      );
   }
}

export default RentalList;
