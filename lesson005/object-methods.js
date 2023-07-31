// example of adding properties and methods to an object

var car = {}
car.mileage = 98765
car.color = 'red'

car.engine = false
car.turnTheKey = function() {
    if (this.engine == true ) {
        this.engine = false
    } else {
        this.engine = true
    }
    
}
car.lightsON = function() {
    console.log('The lights are on.');
}
console.log(car);
car.turnTheKey()
car.lightsON()
car.isEngineRunning = function() {
    if (this.engine == true) {
        console.log('The engine is on');
    } else {
        console.log('The engine is off');
    }
}
car.isEngineRunning()
console.log(car);