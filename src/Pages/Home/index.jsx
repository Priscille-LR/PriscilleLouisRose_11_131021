import React, { Component } from 'react';
import Hero from '../../Components/Hero';
import RentalList from '../../Components/RentalList';
import backgroundHome from '../../Assets/background-home.png';

class Home extends Component {
   render() {
      return (
         <div className="wrapper">
            <Hero cover={backgroundHome} isTextVisible={true} />
            <RentalList />
         </div>
      );
   }
}

export default Home;
