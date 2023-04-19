import { useState } from "react";
import { Link } from "react-router-dom";

function ParkCard({ parkObj }) {
    const [showDescription, setShowDescription] = useState(false)
    const { id, name, location, description, image } = parkObj
    

    const handleClick = () => {
        setShowDescription((current) => !current)
    }

    const buttonText = showDescription ? "Hide Description" : "About the Park"
    const descriptionText = showDescription ? <p>{description}</p> : null
    const locationText = showDescription ? null : <h3>{location}</h3>
   
    return(
        <div className="parkcard">
            <h2>{name}</h2>
            <br></br><br></br>
            {locationText}
            <img src={image} alt='picture of park' />
            {descriptionText}
            <button id='btn' onClick={handleClick}>{buttonText}</button>
            <Link id='link' to={`/parks/${id}`}>Visit Park</Link>
        </div>
    )
}

export default ParkCard;