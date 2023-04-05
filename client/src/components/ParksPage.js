import ParkCard from "./ParkCard";

function ParksPage({parks}) {

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