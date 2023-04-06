import { useState } from "react";
import { Link } from "react-router-dom";

function ParkCard({ parkObj }) {
    const [showDescription, setShowDescription] = useState(false)
    const { id, name, location, description, image } = parkObj
    

    const handleClick = () => {
        setShowDescription((current) => !current)
    }

    const buttonText = showDescription ? "Hide Description" : "Read about the park"
    const descriptionText = showDescription ? <p>{description}</p> : null
   
    return(
        <div className="parkcard">
            <h2>{name}</h2>
            <br></br>
            <h3>{location}</h3>
            <img src={image} alt='picture of park' />
            {descriptionText}
            <button onClick={handleClick}>{buttonText}</button>
            <Link to={`/parks/${id}`}>View {name}</Link>
        </div>
    )
}

export default ParkCard;