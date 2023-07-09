// The correct way to update the state object in React when using useState
// The suggested approach for updating the state object in React when using useState is to copy the state object and then update the copy.

// This usually involves using the spread operator (...).

// Keeping this in mind, here's the updated code:

import { useState } from "react"; 
 
export default function StateObject() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    const newGreeting = {...greeting};
    newGreeting.greet === "Hello, World-Wide Web" ? newGreeting.greet = "Hello, World" : newGreeting.greet = "Hello, World-Wide Web"; 
    setGreeting(newGreeting); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 

// Updating the state object using arrow functions
// Now, let’s use a more complex object to update state.

// The state object now has two properties: greet and location.

// The intention of this update is to demonstrate what to do when only a specific property of the state object is changing, while keeping the remaining properties unchanged:

// import { useState } from "react"; 
 
// export default function App() { 
//   const [greeting, setGreeting] = useState( 
//     { 
//         greet: "Hello", 
//         place: "World" 
//     } 
//   ); 
//   console.log(greeting, setGreeting); 
 
//   function updateGreeting() { 
//     setGreeting(prevState => { 
//         return {...prevState, place: "World-Wide Web"} 
//     }); 
//   } 
 
//   return ( 
//     <div> 
//       <h1>{greeting.greet}, {greeting.place}</h1> 
//       <button onClick={updateGreeting}>Update greeting</button> 
//     </div> 
//   ); 
// } 

// Everything is wrapped in curly braces so that this new object is built correctly, and it is returned from the call to setGreeting.

// Conclusion

// You have learned what happens when changing the string data type to an object, with examples of holding state in an object and updating it based on user-generated events. You also learned about correct and incorrect ways to update the state object in React when using useState, and about updating the state object using arrow functions.