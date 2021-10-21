import {Component} from 'react'
import {rentals} from '../../Data/Rentals'
import RentalCard from '../RentalCard/index.jsx';
import '../RentalList/RentalList.css'

class RentalList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="rental-list">
                {rentals.map(({ id, title, cover }) =>
                    <div key={id}>
                        <RentalCard 
                        id={id}
                        title={title}
                        cover={cover}/>
                    </div>
                )}
            </div>
        )
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

export default RentalList