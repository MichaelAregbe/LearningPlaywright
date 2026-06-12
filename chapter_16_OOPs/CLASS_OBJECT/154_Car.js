class Car {
    // Attribute
    // Constructor
    constructor(assigned_name) {
        this.name = assigned_name;
    }
    drive() {
        console.log("Driving the car " + this.name);
    }
    printDetailsCar() {
        console.log("Details of the car " + this.name);
    }

}
// new calls the constructor and allocates memory for the object. 
// Then assign the value of assigned_name to the this.name attribute. 
// so this.name = i10. this.name is the attribute of the object hyndai_car
// drive() is the behaviour of the object hyndai_car
let hyndai_car = new Car("i10");
hyndai_car.drive();