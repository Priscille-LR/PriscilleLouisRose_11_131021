import '../RentalCard/RentalCard.css'

function RentalCard({ id, title, cover }) {

    return (
        <article key={id} className="rental-card">
           <img className="rental-card__img" alt="rental" src={cover}/>
           <span className="rental-card__title">{title}</span>
        </article>
    )
}

export default RentalCard