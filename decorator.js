var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Beverage = (function () {
    function Beverage() {
        this.description = 'Water';
    }
    Beverage.prototype.getDescription = function () {
        return this.description;
    };
    Beverage.prototype.cost = function () {
        return 0;
    };
    return Beverage;
})();
var CondimentDecorator = (function () {
    function CondimentDecorator(beverage) {
        this.description = 'empty';
        this.beverage = beverage;
    }
    CondimentDecorator.prototype.getDescription = function () {
        return this.description;
    };
    CondimentDecorator.prototype.cost = function () {
        return 0;
    };
    return CondimentDecorator;
})();
var Espresso = (function (_super) {
    __extends(Espresso, _super);
    function Espresso() {
        _super.apply(this, arguments);
        this.description = 'Espresso';
    }
    Espresso.prototype.cost = function () {
        return 1.99;
    };
    return Espresso;
})(Beverage);
var HouseBlend = (function (_super) {
    __extends(HouseBlend, _super);
    function HouseBlend() {
        _super.apply(this, arguments);
        this.description = 'HouseBlend';
    }
    HouseBlend.prototype.cost = function () {
        return 0.99;
    };
    return HouseBlend;
})(Beverage);
var Mocha = (function (_super) {
    __extends(Mocha, _super);
    function Mocha(beverage) {
        _super.call(this, beverage);
        this.description = ' + Mocha';
    }
    Mocha.prototype.getDescription = function () {
        return this.beverage.getDescription() + this.description;
    };
    Mocha.prototype.cost = function () {
        return this.beverage.cost() + 0.25;
    };
    return Mocha;
})(CondimentDecorator);
var Whip = (function (_super) {
    __extends(Whip, _super);
    function Whip(beverage) {
        _super.call(this, beverage);
        this.description = ' + Whip';
    }
    Whip.prototype.getDescription = function () {
        return this.beverage.getDescription() + this.description;
    };
    Whip.prototype.cost = function () {
        return this.beverage.cost() + 0.75;
    };
    return Whip;
})(CondimentDecorator);
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
//# sourceMappingURL=decorator.js.map