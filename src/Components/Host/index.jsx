import React, { Component } from 'react';
import '../Host/Host.css';

class Host extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      const { name, picture } = this.props;
      return (
         <div className="host">
            <p className="host__name">{name}</p>
            <img src={picture} alt="host" className="host__picture" />
         </div>
      );
   }
}
export default Host;
