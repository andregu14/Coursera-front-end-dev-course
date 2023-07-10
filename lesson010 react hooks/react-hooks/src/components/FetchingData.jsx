import { useEffect, useState } from "react";

export default function FetchingData() {
    const [user, setUser] = useState([])

    const fetchData = () => {
        fetch("https://randomuser.me/api/?results=1")
            .then(response => response.json())
            .then(data => setUser(data))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return Object.keys(user).length > 0 ? (
        <div>
            <h1>Data returned</h1>
            <h2>First Name: {user.results[0].name.first}</h2>
            <h2>Last Name: {user.results[0].name.last}</h2>
            <img src={user.results[0].picture.large} alt="User profile" />
        </div>
    ) : (
        <h1>Data pending...</h1>
    )
}
