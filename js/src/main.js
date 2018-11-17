function Float ( arg ) {
    this.color = arg.color || 'white';
    this.factorySize = arg.factorySize || 10; // Regular size
};
function Block ( arg ) {
    this.color = arg.color || 'blue';
    this.factorySize = arg.factorySize || 15
}
function Inline ( arg ) {
    this.color = arg.color || 'yellow';
    this.factorySize = arg.factorySize || 8
}
function Float ( arg ) {
  this.color = arg.color || 'yellow';
  this.factorySize = arg.factorySize || 8
}
function Flex ( arg ) {
  this.color = arg.color || 'yellow';
  this.factorySize = arg.factorySize || 8
}
function Grid ( arg ) {
  this.color = arg.color || 'yellow';
  this.factorySize = arg.factorySize || 8
}
function Absolute ( arg ) {
  this.color = arg.color || 'yellow';
  this.factorySize = arg.factorySize || 8
}

function Factory () {};
Factory.prototype.factoryType = Block;
Factory.prototype.createFactory = function (fac) {
    switch(this.factoryType){
        case "block":
        this.factoryType = Block;
        break;
        case "inline":
        this.factoryType = Inline(this);
        break;
        case "float":
        this.factoryType = Float;
        break;
        case "flex":
        this.factoryType = Flex;
        break;
        case "grid":
        this.factoryType = Grid;
        break;
        case "absolute":
        this.factoryType = Absolute;
        break;
    }
    return this.factoryType;
};

document.querySelector('.createbtn').addEventListener('click', function() {
  var factory = new Factory();
  factory.factoryType = (document.querySelector('#factory-type').value);
  factory.createFactory({
  });
  console.log(factory);
  factoryDisplay = document.querySelector('#factory-display')
  factoryDisplay.style.color = factory.color;
  factoryDisplay.style.height = `${factory.factorySize}rem`;
  factoryDisplay.style.width = `${factory.factorySize}rem`;
  factoryDisplay.style.display = factory.factoryType;

});



/* 
/ Types.js - Constructors used behind the scenes
 
// A constructor for defining new cars
function Car( options ) {
 
  // some defaults
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";
 
}
 
// A constructor for defining new trucks
function Truck( options){
 
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}
 
 
// FactoryExample.js
 
// Define a skeleton vehicle factory
function VehicleFactory() {}
 
// Define the prototypes and utilities for this factory
 
// Our default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car;
 
// Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function ( options ) {
 
  switch(options.vehicleType){
    case "car":
      this.vehicleClass = Car;
      break;
    case "truck":
      this.vehicleClass = Truck;
      break;
    //defaults to VehicleFactory.prototype.vehicleClass (Car)
  }
 
  return new this.vehicleClass( options );
 
};
 
// Create an instance of our factory that makes cars
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle( {
            vehicleType: "car",
            color: "yellow",
            doors: 6 } );
 
// Test to confirm our car was created using the vehicleClass/prototype Car
 
// Outputs: true
console.log( car instanceof Car );
 
// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log( car );


*/