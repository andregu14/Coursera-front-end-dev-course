import { useState } from "react"
import StateObject from "./StateObject"

const UseStateEx = () => {
    const [randomNumber, setRandomNumber] = useState()
    let random = () => {
       return Math.round(Math.random() * 100)
    }

    return (
        <>
            <h1>Use State Hook</h1>
            <p>Random number from 0 to 100 = <strong>{randomNumber}</strong></p>
            <button onClick={ () => setRandomNumber(random)}>Click on the button to generate a random number</button>
            <StateObject />
        </>
     
    )
}

export default UseStateEx