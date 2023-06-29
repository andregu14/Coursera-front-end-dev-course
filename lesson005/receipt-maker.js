const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]

const tax = 1.20

function getPrices(taxBoolean) {
    for (key in dishData) {
        let object = dishData[key]
        let finalPrice;
        if (taxBoolean === true) {
            finalPrice = object.price * tax
        } else if (taxBoolean === false) {
            finalPrice = object.price
        } else {
            console.log('You need to pass a boolean to the getPrices call!');
            return
        }
        console.log(`Dish: ${object.name} Price: $${finalPrice}`);
    }
}

function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean)

    let condition1 = typeof(guests) === 'number' && guests > 0 && guests < 30

    let condition2 = typeof(taxBoolean) === 'boolean'

    if (condition1 && condition2) {
        let discount = 0
        if (guests < 5) {
            discount = 5
        } else if (guests >= 5) {
            discount = 10
        }
        console.log('Discount is: $' + discount);
    } else if (!condition1) {
        console.log('The second argument must be a number between 0 and 30');
    } 

}

getDiscount(false, 4)
