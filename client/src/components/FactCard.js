import { useState } from "react";

function FactCard({ factObj }) {
    const { id, fun_fact, answer } = factObj
    const [showAnswer, setShowAnswer] = useState(false)

    const buttonText = showAnswer ? "Hide Answer" : "Show Answer"
    const answerText = showAnswer ? <h6>{answer}</h6> : null

    const handleClick = () => {
        setShowAnswer((current) => !current)
    }

    return (
        <div key={id}>
            <h5>{fun_fact}</h5>
            {answerText}
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}

export default FactCard;