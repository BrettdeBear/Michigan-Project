import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function OnePark() {
    const [onePark, setOnePark] = useState([])
    const { id } = useParams()

    useEffect(() => {
            fetch(`/parks/${id}`)
            .then(response => response.json())
            .then(data => setOnePark(data))
        }, [id])
        console.log(onePark)

    const parkTrails = onePark.trail || []
    console.log(parkTrails)

    const oneParkTrails = parkTrails.map((trailObj) => {
        return (
            <div className="parkcard" key={trailObj.id}>
                <h3>{trailObj.name}</h3>
                <h5>{trailObj.length} || {trailObj.difficulty}</h5>
                <p>{trailObj.description}</p>
                <Link to={`/trails/${trailObj.id}`}>View Trail</Link>
            </div>
        )
    })

    return (
        <div>
            <h2>{onePark.name}</h2>
            <h3>{onePark.location}</h3>
            <p>{onePark.description}</p>
            {oneParkTrails}
        </div>
    )
}

export default OnePark;