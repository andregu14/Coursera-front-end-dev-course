import { useRef } from "react";

export default function UseRefExample() {
    const formInputRef = useRef(null)

    const focusInput = () => {
        formInputRef.current.focus()
    }

    return (
        <>
            <h1>Using useRef to access underlying DOM</h1>
            <input type="text" ref={formInputRef}/>
            <button onClick={focusInput}>
                Focus input
            </button>
        </>
    )
}