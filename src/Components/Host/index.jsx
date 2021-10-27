import { Component } from 'react';
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
            <h2 className="host__name">{name}</h2>
            <img src={picture} alt="host" className="host__picture" />
         </div>
      );
   }
}
export default Host;
