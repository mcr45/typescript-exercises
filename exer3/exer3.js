var car = {
    brand: "Toyota",
    speed: 120,
    accelerate: function () {
        console.log("The ".concat(this.brand, " is accelerating"));
    },
    brake: function (s) { if (s > 100) {
        return "hit the brake jack";
    }
    else {
        return 'keep going';
    } }
};
car.accelerate();
car.brake(car.speed);
