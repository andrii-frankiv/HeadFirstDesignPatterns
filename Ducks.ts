/**
 * STRUCTURE PATTERN
 * Created by user on 27.01.15.
 */
interface FlyBehavior {
    fly(): void;
}

interface QuackBehavior {
    quack(): void;
}

class FlyWithWings implements FlyBehavior {
    fly() {
        console.log('I am flying');
    }
}

class FlyNoWay implements FlyBehavior {
    fly() {
        console.log('I can not fly....');
    }
}

class FlyAsRocket implements FlyBehavior {
    fly() {
        console.log('I am rocket! I am flying!');
    }
}

class Quack implements QuackBehavior {
    quack() {
        console.log('Quack!! Quack!! Quack!!');
    }
}

class MuteQuack implements QuackBehavior {
    quack() {
        console.log('nothing to say... I am dead');
    }
}

class Duck {
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;

    setFlyBehavior(fb: FlyBehavior) {
        this.flyBehavior = fb;
    }

    setQuackBehavior(qb: QuackBehavior) {
        this.quackBehavior = qb;
    }

    performFly() {
        this.flyBehavior.fly();
    }

    performQuack() {
        this.quackBehavior.quack();
    }

}

class AliveDuck extends Duck {
    flyBehavior = new FlyWithWings();
    quackBehavior = new Quack();
}

class DeadDuck extends Duck {
    flyBehavior = new FlyNoWay();
    quackBehavior = new MuteQuack();
}

var duckLive = new AliveDuck();
duckLive.performFly();
duckLive.performQuack();

var deadDuck = new DeadDuck();
deadDuck.performFly();
deadDuck.performQuack();

console.log('making duck alive....');

deadDuck.setFlyBehavior(new FlyAsRocket());
deadDuck.performFly();
