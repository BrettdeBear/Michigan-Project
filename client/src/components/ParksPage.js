import { useState, useEffect } from "react";

import ParkCard from "./ParkCard";

function ParksPage() {
    const [parks, setParks] = useState([]);

    useEffect(() => {
        fetch('/parks')
        .then((response) => response.json())
        .then(parkData => setParks(parkData))
    }, [])


    const renderParks = parks.map(parkObj => {
        return <ParkCard key={parkObj.id} parkObj={parkObj} />
    })

    return (
        <div className="parkpage" id="parks">
            {renderParks}
        </div>
    )
}

export default ParksPage;