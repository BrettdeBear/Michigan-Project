import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TrailCard() {
    const [oneTrail, setOneTrail] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`/trails/${id}`)
        .then(response => response.json())
        .then(data => setOneTrail(data))
    }, [id])

    console.log(oneTrail)

    return <div>
        <h3>{oneTrail.name}</h3>
        <h5>{oneTrail.length} || {oneTrail.difficulty}</h5>
        <p>{oneTrail.description}</p>
    </div>
}

export default TrailCard;