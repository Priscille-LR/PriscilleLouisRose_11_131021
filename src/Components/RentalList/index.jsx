import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import {rentals} from '../../Data/Rentals'
import RentalCard from '../RentalCard/index.jsx';
import '../RentalList/RentalList.css';

const rentals = 'http://localhost:3000/data.json';

class RentalList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         rentalData: [],
      };
   }

   componentDidMount() {
      // const { id } = this.props.match.params;

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

// function RentalList() {
//     return (
//         <div className="rental-list">
//             {rentals.map(({ id, title, cover }) =>
//                 <div key={id}>
//                     <RentalCard
//                     id={id}
//                     title={title}
//                     cover={cover}/>
//                 </div>
//             )}
//         </div>
//     )
// }

export default RentalList;
