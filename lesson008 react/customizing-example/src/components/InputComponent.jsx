import { useState } from "react";

function InputComponent() {
    const [inputText, setText] = useState('hello')

    function handleChange(e) {
        setText(e.target.value)
    }

    return (
        <>
            <input type="text" value={inputText} onChange={handleChange} />
            <p>You typed: {inputText}</p>
            <button onClick={() => setText('Hello')}>Reset</button>
        </>
    )
}

export default InputComponent