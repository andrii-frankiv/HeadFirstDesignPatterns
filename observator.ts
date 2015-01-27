/**
 * OBSERVER
 * Created by user on 27.01.15.
 */
interface Subject {
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObservers(): void;
}

interface Observer {
    update(temp: number, humidity: number, pressure: number): void;
}

interface DisplayElement {
    display(): void;
}

class WeatherData implements Subject {
    private observers: Array<any>;
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor() {
        this.observers = [];
    }

    registerObserver(o: Observer) {
        this.observers.push(o);
    }

    removeObserver(o: Observer) {
        var i = this.observers.indexOf(o);
        if (i >= 0) {
            this.observers.splice(i);
        }
    }

    notifyObservers() {
        for(var i = 0; i < this.observers.length; i++) {
            this.observers[i].update(this.temperature, this.humidity, this.pressure);
        }
    }

    measurementsChanged() : void {
        this.notifyObservers();
    }

    setMeasurments(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}

class CurrentConditionDisplay implements Observer, DisplayElement {
    private temperature: number;
    private humidity: number;
    private pressure: number;
    private weatherData: Subject;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(temp: number, humidity: number, pressure: number) {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }

    display() {
        console.log("Current conditions:" + " C "+ this.temperature + " |" + " % " + this.humidity + " | " + "Pa " + this.pressure);
    }
}

class WeatherStation {
    static weatherData: WeatherData;
    static currentConditionDisplay: CurrentConditionDisplay;
    static init(): void {
        WeatherStation.weatherData = new WeatherData();
        WeatherStation.currentConditionDisplay = new CurrentConditionDisplay(WeatherStation.weatherData);
        WeatherStation.weatherData.setMeasurments(20,12, 3);
        WeatherStation.weatherData.setMeasurments(12,22, 13);

    }
}

WeatherStation.init();