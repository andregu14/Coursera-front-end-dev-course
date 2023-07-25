import { useEffect, useState } from "react"

export default function Feedback() {

    const [score, setScore] = useState('10')
    const [comment, setComment] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Number(score) <= 5 && comment.length <= 10) {
            alert('Please provide a comment explaining why the experience was poor.')
        return
    }

    useEffect(() => {
        console.log('Form submitted!');
    }, [handleSubmit])

    setComment("")
    setScore("10")
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback form</h2>
                    <div className="field">
                        <label>Score: ⭐{score}</label>
                        <input type="range" 
                            min={0} 
                            max={10} 
                            value={score}
                            onChange={e => setScore(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label>Comment:</label>
                        <textarea value={comment} onChange={e => setComment(e.target.value)} />
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}