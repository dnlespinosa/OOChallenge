class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return 'BEEP';
    }
    toString() {
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

class Car extends Vehicle{
    constructor (make, model, year, numWheels){
        numWheels = 4;
        super(make, model, year);
        this.numWheels = numWheels
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year, numWheels){
        numWheels = 2;
        super(make, model, year);
        this.numWheels = numWheels;
    }
    revEngine() {
        return 'VROOOOOOOM';
    }
}

class Garage{
    constructor(capacity, vehicles){
        vehicles = [];
        this.vehicles = vehicles;
        this.capacity = capacity;
    }
    add(car) {
        if (car.make && car.model && car.year && this.capacity != 0){
            this.vehicles.push(car);
            this.capacity-=1;
            console.log(`Vehicle Added! there are ${this.capacity} spots remaining!`);
        } else if (car.make && car.model && car.year && this.capacity === 0) {
            console.log('Sorry all spots are full')
        } else {
            console.log('Only vehicles are allowed here!');
        }
    }
}

