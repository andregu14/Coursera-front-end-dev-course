export default function DessertList(props) {

    const lowCaloriesDesserts = props.data.filter((dessert) => {
        return dessert.calories < 500
    })

    .sort((a, b) => a.calories - b.calories)

    .map((dessert, index) => {
        return (
            <li key={index}>
                {dessert.name} - {dessert.calories} cal
            </li>
        )
    })

    return (
        <ul>
            {lowCaloriesDesserts}
        </ul>
    )
}