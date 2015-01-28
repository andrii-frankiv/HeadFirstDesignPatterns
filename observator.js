/**
 * OBSERVER
 * Created by user on 27.01.15.
 */
//interface Subject {
//    registerObserver(o: Observer): void;
//    removeObserver(o: Observer): void;
//    notifyObservers(): void;
//}
//
//interface Observer {
//    update(temp: number, humidity: number, pressure: number): void;
//}
//
//interface DisplayElement {
//    display(): void;
//}
//
//class WeatherData implements Subject {
//    private observers: Array<any>;
//    private temperature: number;
//    private humidity: number;
//    private pressure: number;
//
//    constructor() {
//        this.observers = [];
//    }
//
//    registerObserver(o: Observer) {
//        this.observers.push(o);
//    }
//
//    removeObserver(o: Observer) {
//        var i = this.observers.indexOf(o);
//        if (i >= 0) {
//            this.observers.splice(i);
//        }
//    }
//
//    notifyObservers() {
//        for(var i = 0; i < this.observers.length; i++) {
//            this.observers[i].update(this.temperature, this.humidity, this.pressure);
//        }
//    }
//
//    measurementsChanged() : void {
//        this.notifyObservers();
//    }
//
//    setMeasurments(temperature: number, humidity: number, pressure: number) {
//        this.temperature = temperature;
//        this.humidity = humidity;
//        this.pressure = pressure;
//        this.measurementsChanged();
//    }
//}
//
//class CurrentConditionDisplay implements Observer, DisplayElement {
//    private temperature: number;
//    private humidity: number;
//    private pressure: number;
//    private weatherData: Subject;
//
//    constructor(weatherData: Subject) {
//        this.weatherData = weatherData;
//        weatherData.registerObserver(this);
//    }
//
//    update(temp: number, humidity: number, pressure: number) {
//        this.temperature = temp;
//        this.humidity = humidity;
//        this.pressure = pressure;
//        this.display();
//    }
//
//    display() {
//        console.log("Current conditions:" + " C "+ this.temperature + " |" + " % " + this.humidity + " | " + "Pa " + this.pressure);
//    }
//}
//
//class WeatherStation {
//    static weatherData: WeatherData;
//    static currentConditionDisplay: CurrentConditionDisplay;
//    static init(): void {
//        WeatherStation.weatherData = new WeatherData();
//        WeatherStation.currentConditionDisplay = new CurrentConditionDisplay(WeatherStation.weatherData);
//        WeatherStation.weatherData.setMeasurments(20,12, 3);
//        WeatherStation.weatherData.setMeasurments(12,22, 13);
//
//    }
//}
//
//WeatherStation.init();
var PostOffice = (function () {
    function PostOffice() {
        this.observersList = [];
    }
    PostOffice.prototype.registerObserver = function (o) {
        this.observersList.push(o);
    };
    PostOffice.prototype.removeObserver = function (o) {
        var i = this.observersList.indexOf(o);
        if (i >= 0)
            this.observersList.splice(i);
    };
    PostOffice.prototype.notifyObservers = function () {
        for (var i = 0; i < this.observersList.length; i++) {
            this.observersList[i].update(this.magazines);
        }
    };
    PostOffice.prototype.updateMagazinesList = function (list) {
        this.magazines = list;
        this.notifyObservers();
    };
    return PostOffice;
})();
var Subscriber = (function () {
    function Subscriber(observer) {
        observer.registerObserver(this);
    }
    Subscriber.prototype.showSubscriptions = function () {
        console.log(this.magazines, " - magazines list");
    };
    Subscriber.prototype.update = function (list) {
        this.magazines = list;
        this.showSubscriptions();
    };
    return Subscriber;
})();
function init() {
    var list = ['RollingStones', 'Viva', 'Guardians'];
    var mainOffice = new PostOffice();
    var deliveryOffice = new Subscriber(mainOffice);
    mainOffice.updateMagazinesList(list);
    mainOffice.removeObserver(deliveryOffice);
    mainOffice.updateMagazinesList(list);
}
init();
//# sourceMappingURL=observator.js.map