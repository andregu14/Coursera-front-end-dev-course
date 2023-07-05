import { useRef } from "react"

function TextInputWithFocusButton() {
    const inputEl = useRef(null)
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus()
    }

    return (
        <>
            <input type="text" ref={inputEl} />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    )
}

// Using the ref attribute on the input element, I can then access the current value and invoke the focus() method on it, thereby focusing the input field.

// There are situations where accessing the DOM directly is needed, and this is where the useRef hook comes into play.

export default TextInputWithFocusButton