import {rentals} from '../../Data/Rentals'
import RentalCard from '../RentalCard/index.jsx';
import '../RentalList/RentalList.css'


function RentalList() {
    return (
        <div className="rental-list">
            {rentals.map(({ id, title, cover }) =>
                <div key={id}>
                    <RentalCard 
                    title={title}
                    cover={cover}/>
                </div>
            )}
        </div>
    )
}

export default RentalList