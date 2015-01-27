var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var FlyWithWings = (function () {
    function FlyWithWings() {
    }
    FlyWithWings.prototype.fly = function () {
        console.log('I am flying');
    };
    return FlyWithWings;
})();
var FlyNoWay = (function () {
    function FlyNoWay() {
    }
    FlyNoWay.prototype.fly = function () {
        console.log('I can not fly....');
    };
    return FlyNoWay;
})();
var FlyAsRocket = (function () {
    function FlyAsRocket() {
    }
    FlyAsRocket.prototype.fly = function () {
        console.log('I am rocket! I am flying!');
    };
    return FlyAsRocket;
})();
var Quack = (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () {
        console.log('Quack!! Quack!! Quack!!');
    };
    return Quack;
})();
var MuteQuack = (function () {
    function MuteQuack() {
    }
    MuteQuack.prototype.quack = function () {
        console.log('nothing to say... I am dead');
    };
    return MuteQuack;
})();
var Duck = (function () {
    function Duck() {
    }
    Duck.prototype.setFlyBehavior = function (fb) {
        this.flyBehavior = fb;
    };
    Duck.prototype.setQuackBehavior = function (qb) {
        this.quackBehavior = qb;
    };
    Duck.prototype.performFly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.performQuack = function () {
        this.quackBehavior.quack();
    };
    return Duck;
})();
var AliveDuck = (function (_super) {
    __extends(AliveDuck, _super);
    function AliveDuck() {
        _super.apply(this, arguments);
        this.flyBehavior = new FlyWithWings();
        this.quackBehavior = new Quack();
    }
    return AliveDuck;
})(Duck);
var DeadDuck = (function (_super) {
    __extends(DeadDuck, _super);
    function DeadDuck() {
        _super.apply(this, arguments);
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new MuteQuack();
    }
    return DeadDuck;
})(Duck);
var duckLive = new AliveDuck();
duckLive.performFly();
duckLive.performQuack();
var deadDuck = new DeadDuck();
deadDuck.performFly();
deadDuck.performQuack();
console.log('making duck alive....');
deadDuck.setFlyBehavior(new FlyAsRocket());
deadDuck.performFly();
//# sourceMappingURL=Ducks.js.map