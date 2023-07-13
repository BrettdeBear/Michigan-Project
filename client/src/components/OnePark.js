import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function OnePark({user}) {
    const [onePark, setOnePark] = useState([])
    const { id } = useParams()

    useEffect(() => {
            fetch(`/parks/${id}`)
            .then(response => response.json())
            .then(data => setOnePark(data))
        }, [id])
        // console.log(onePark)

    const parkTrails = onePark.trail || []
    // console.log(parkTrails)

    const oneParkTrails = parkTrails.map((trailObj) => {
        return (
            <div className="trailcard" key={trailObj.id}>
                <h3>{trailObj.name}</h3>
                <h5>{trailObj.length} || {trailObj.difficulty}</h5>
                <img src={trailObj.image} />
                <p>{trailObj.description}</p>
                {user ? <Link id='link' to={`/trails/${trailObj.id}`}>View Trail</Link> : <Link id='link' to={'/authentication'}>Log in to View</Link>}
            </div>
        )
    })

    return (
        <div className="oneparkcontainer">
            <div className="onePark">
                <h2>{onePark.name}</h2>
                <h3>{onePark.location}</h3>
                <p>{onePark.description}</p>
                <img src={onePark.image} />
            </div>
            {oneParkTrails}
        </div>
    )
}

export default OnePark;