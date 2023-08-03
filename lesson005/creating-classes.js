class Train {
    constructor(color, lightsOn) {
        this.color = color
        this.lightsOn = lightsOn
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn
    }
    lightStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        let proto = Object.getPrototypeOf(this)
        console.log(proto);
    }
}

let myFirstTrain = new Train('red', false)
console.log(myFirstTrain);
myFirstTrain.getSelf()

let train2 = new Train('blue', true)

let train4 = new Train('red', false)

// Thus, in conclusion, the class syntax in JavaScript allows us to clearly separate individual object's data - which exists on the object instance itself - from the shared object's functionality (methods), which exist on the prototype and are shared by all object instances.


//However, this is not the whole story.

// It is possible to implement polymorphism using classes in JavaScript, by inheriting from the base class and then overriding the inherited behavior. To understand how this works, it is best to use an example.

// In the code that follows, you will observe another class being coded, which is named HighSpeedTrain and inherits from the Train class.

// This makes the Train class a base class, or the super-class of the HighSpeedTrain class. Put differently, the HighSpeedTrain class becomes the sub-class of the Train class, because it inherits from it.

// To inherit from one class to a new sub-class, JavaScript provides the extends keyword, which works as follows:

// class HighSpeedTrain extends Train {
//     constructor(passengers, highSpeedOn, color, lightsOn ) {
//         super(color, lightsOn)
//         this.passengers = passengers
//         this.highSpeedOn = highSpeedOn
//     }
// }

/**
 * Notice the slight difference in syntax in the constructor of the HighSpeedTrain class, namely the use of the super keyword.
 * 
 * In JavaScript classes, super is used to specify what property gets inherited from the super-class in the sub-class.
 * 
 * In this case, I choose to inherit both the properties from the Train super-class in the HighSpeedTrain sub-class.
 * 
 * These properties are color and lightsOn.
 * 
 * Next, you add the additional properties of the HighSpeedTrain class inside its constructor, namely, the passengers and highSpeedOn properties.
 * 
 * Next, inside the constructor body, you use the super keyword and pass in the inherited color and lightsOn properties that come from the Train class. On subsequent lines you assign passengers to this.passengers, and highSpeedOn to this.highSpeedOn.
 * 
 * Notice that in addition to the inherited properties, you also automatically inherit all the methods that exist on the Train prototype, namely, the toggleLights(), lightsStatus(), getSelf(), and getPrototype() methods.
 * 
 * Now let's add another method that will be specific to the HighSpeedTrain class: the toggleHighSpeed() method.
 * 
 */

// class HighSpeedTrain extends Train {
//     constructor(passengers, highSpeedOn, color, lightsOn ) {
//         super(color, lightsOn)
//         this.passengers = passengers
//         this.highSpeedOn = highSpeedOn
//     }
//     toggleHighSpeed() {
//         this.highSpeedOn = !this.highSpeedOn
//         console.log('High speed status:', this.highSpeedOn);
//     }
// }

//Additionally, imagine you realized that you don't like how the toggleLights() method from the super-class works, and you want to implement it a bit differently in the sub-class. You can add it inside the HighSpeedTrain class. 

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn ) {
        super(color, lightsOn)
        this.passengers = passengers
        this.highSpeedOn = highSpeedOn
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights()
        super.lightStatus()
        console.log('Lights are 100% operational.');
    }
}

/**
 * 
 * You realized that the HighSpeedTrain method should reuse the existing behavior of the original toggleLights() method, and so you used the super.toggleLights() syntax to inherit the entire super-class' method.
 * 
 * Next, you also inherit the behavior of the super-class' lightsStatus() method - because you realize that you want to have the updated status of the lightsOn property logged to the console, whenever you invoke the toggleLights() method in the sub-class.
 * 
 * Finally, you also add the third line in the re-implemented toggleLights() method

 */

// Now you're ready to build some train objects.

var train5 = new Train('blue', false)
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false)

train5.toggleLights() // undefined
train5.lightStatus() // Lights on? true

// -------------------------------------------------------



// Using class instance as another class' constructor's property

// Consider the following example:

class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.StationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym('7-22', 'right corner', 'left corner')

console.log(boxingGym.openHrs);
console.log(boxingGym.StationaryBike);
console.log(boxingGym.treadmill);

/**
 * 
 * In this example, there are three classes defined: StationaryBike, Treadmill, and Gym.
 * 
 * The StationaryBike class is coded so that its future object instance will have the position and gears properties. The position property describes where the stationary bike will be placed inside the gym, and the gears propery gives the number of gears that that stationary bike should have.
 * 
 * The Treadmill class also has a position, and another property, named modes (as in "exercise modes").
 * 
 * The Gym class has three parameters in its constructor function: openHrs, stationaryBikePos, treadmillPos.
 * 
 * This code allows me to instantiate a new instance object of the Gym class, and then when I inspect it, I get the following information:
 * 
 * the openHrs property is equal to "7-22" (that is, 7am to 10pm)
 * 
 * the stationaryBike property is an object of the StationaryBike type, containing two properties: position and gears
 * 
 * the treadmill property is an object of the Treadmill type, containing two properties: position and modes
 *
 */