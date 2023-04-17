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
            <div className="home">
                <h2>Welcome to Michigan Outdoors</h2>
                <p>Explore parks and hiking trails all throughout the beautiful state of Michigan.</p>
                <img src='https://github.com/BrettdeBear/Michigan-Project/blob/main/B371B4F7-4154-4E9D-8A2B-307B838D8399_1_105_c.jpeg?raw=true'/>
            </div>
            {renderFacts}
        </div>
    )
}

export default Home;