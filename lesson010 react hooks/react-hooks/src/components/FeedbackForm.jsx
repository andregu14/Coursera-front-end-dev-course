import { useState } from "react";

function FeedbackForm(onSubmit) {
    const [score, setScore] = useState("10")
    const [comment, setComment] = useState("")
    
    const isDisabled = Number(score) < 5 && comment.length <= 10

    const textAreaPlaceholder = isDisabled 
    ? "Please provide a comment explaining why the experience was not good. Minimum lenght is 10 characters" 
    : "Optional feedback"

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({score, comment})
    }

    return (
        <div>
            <form onsubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback form</h2>
                    <div>
                        <label htmlFor="input1">Score: {score}</label>
                        <input 
                            id="input1"
                            name="input1"
                            type="range"
                            value={score}
                            onChange={(e) => {
                                setScore(e.target.value)
                            }}
                            min="0"
                            max="10"
                        />
                    </div>
                    <div>
                        <label>Comments: </label>
                        <textarea 
                            name="comment" 
                            placeholder={textAreaPlaceholder}
                            value={comment}
                            onChange={(e) => {
                                setComment(e.target.value)
                            }}
                        />
                        <button disabled={isDisabled}>Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default FeedbackForm