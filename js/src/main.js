const Factory = function (arg) {
    this.factoryType = arg.factoryType || 'origin';

    this.color = arg.color || 'white';
    this.factorySize = arg.factorySize || 10; // Regular size
};

Factory.prototype.createFactory = function(fac){

    switch(fac.factoryType){
        case "origin":
        this.factoryType = Origin;
        break;
        case "block":
        this.factoryType = Block;
        break;
        case "inline":
        this.factoryType = Inline;
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

