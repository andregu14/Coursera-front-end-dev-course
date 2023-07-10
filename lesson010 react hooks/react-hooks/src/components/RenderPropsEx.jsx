import { useEffect, useState } from "react"

const DataFetcher = ({render, url}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        if (url.includes("desserts")) {
            setData(["cake", "ice cream", "pie", "brownie"])
        } else {
            setData(["water", "soda", "juice"])
        }
    }, [])

    return render(data)
}

const DessertsCount = () => {
    return (
        <DataFetcher 
        url="htt://littlelemon/desserts"
        render={(data) => <p>{data.lenght} desserts</p>}
        />
    )
}

const DrinksCount = () => {
    return (
        <DataFetcher 
            url="htt://littlelemon/drinks"
            render={(data) => <h3>{data.lenght} drinks</h3>}
        />
    )
}

function RenderPropsEx() {
    return (
        <div>
            <DessertsCount />
            <DrinksCount />
        </div>
    )
}