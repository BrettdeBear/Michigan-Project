import React from "react";
import { useState, useEffect } from "react";
import FactCard from "./FactCard";

function Home() {
    const [facts, setFacts] = useState([])
    
    useEffect(() => {
        fetch('/facts')
        .then((response) => response.json())
        .then(factData => setFacts(factData))
    }, [])
    
    // console.log(facts)

    const renderFacts = facts.map(factObj => {
        console.log(factObj)
        return (
            <FactCard key={factObj.id} factObj={factObj} /> 
        )
    })

    return(
        <div>
            <h2>Welcome to the Michigan Outdoors!</h2>
            <p>Explore parks and hiking trails all throughout the beautiful state of Michigan.</p>
            {renderFacts}
        </div>
    )
}

export default Home;