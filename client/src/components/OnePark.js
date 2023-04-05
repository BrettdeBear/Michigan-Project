import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function OnePark({parks}) {
    const [onePark, setOnePark] = useState([])
    const { id } = useParams()

    useEffect(() => {
            fetch(`/parks/${id}`)
            .then(response => response.json())
            .then(data => setOnePark(data))
        }, [id])
        console.log(onePark)

    return (
        <div>
            <h2>{onePark.name}</h2>
            <h3>{onePark.location}</h3>
            <p>{onePark.description}</p>
        </div>
    )
}

export default OnePark;