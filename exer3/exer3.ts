interface Vehicle {
    brand: string;
    speed: number;
    
    accelerate(): void;
}

interface Vehicle{

    brake:(s:number)=>string
}
const car: Vehicle = {
    brand: "Toyota",
    speed: 120,
    accelerate(): void {
        console.log(`The ${this.brand} is accelerating`);
    },
    brake(s:number){if(s>100){return `hit the brake jack`} else {return 'keep going'}}
}

car.accelerate();
car.brake(car.speed)