interface DecoratosAndComponents {
    description: string;
    getDescription(): string;
    cost(): number;
}

class Beverage implements DecoratosAndComponents {
    description = 'Water';
    getDescription () {
        return this.description;
    }
    cost() {
        return 0;
    }
}

class CondimentDecorator implements DecoratosAndComponents {
    beverage: DecoratosAndComponents;
    description = 'empty';
    constructor(beverage: DecoratosAndComponents) {
        this.beverage = beverage;
    }
    getDescription() {
        return this.description;
    }
    cost() {
        return 0;
    }
}

class Espresso extends Beverage {
    description = 'Espresso';
    cost() {
        return 1.99;
    }
}

class HouseBlend extends Beverage {
    description = 'HouseBlend';
    cost() {
        return 0.99;
    }
}

class Mocha extends CondimentDecorator {
    description = ' + Mocha';
    constructor(beverage) {
        super(beverage);
    }
    getDescription() {
        return this.beverage.getDescription() + this.description;
    }
    cost() {
        return this.beverage.cost() + 0.25;
    }

}

class Whip extends CondimentDecorator {
    description = ' + Whip';
    constructor(beverage) {
        super(beverage);
    }
    getDescription() {
        return this.beverage.getDescription() + this.description;
    }
    cost() {
        return this.beverage.cost() + 0.75;
    }
}

function init() {
    var beverage1 = new Espresso();
    console.log(beverage1.cost() + '$ ', beverage1.getDescription());

    var beverage2 = new HouseBlend();
    console.log(beverage2.cost() + '$ ', beverage2.getDescription());

    beverage2 = new Mocha(beverage2);
    console.log(beverage2.cost() + '$ ', beverage2.getDescription());
    beverage2 = new Whip(beverage2);
    console.log(beverage2.cost() + '$ ', beverage2.getDescription());

}
init();