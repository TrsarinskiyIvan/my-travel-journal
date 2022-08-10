import './card.css';

function Card(props) {

    const { title, location, googleMapsUrl, startDate, endDate, description, imageUrl } = props;

    return (
        <article>
            <div className="card">
                <img className="card-image" src={imageUrl} alt="" />
                <div className="right-side">
                    <div className="location-block">
                        <img src="./location.png" alt="" className="location-image" />
                        <span className="country">{location}</span>
                        <a className="location-google-map" target="_blanck" href={googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <div className='date-block'>
                        {startDate} - {endDate}
                    </div>
                    <p className="description-block">{description}</p>
                </div>
            </div>
        </article>
    );
}

export default Card;