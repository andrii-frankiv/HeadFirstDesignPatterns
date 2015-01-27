var WeatherData = (function () {
    function WeatherData() {
        this.observers = [];
    }
    WeatherData.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherData.prototype.removeObserver = function (o) {
        var i = this.observers.indexOf(o);
        if (i >= 0) {
            this.observers.splice(i);
        }
    };
    WeatherData.prototype.notifyObservers = function () {
        for (var i = 0; i < this.observers.length; i++) {
            this.observers[i].update(this.temperature, this.humidity, this.pressure);
        }
    };
    WeatherData.prototype.measurementsChanged = function () {
        this.notifyObservers();
    };
    WeatherData.prototype.setMeasurments = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    };
    return WeatherData;
})();
var CurrentConditionDisplay = (function () {
    function CurrentConditionDisplay(weatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    CurrentConditionDisplay.prototype.update = function (temp, humidity, pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    };
    CurrentConditionDisplay.prototype.display = function () {
        console.log("Current conditions:" + " C " + this.temperature + " |" + " % " + this.humidity + " | " + "Pa " + this.pressure);
    };
    return CurrentConditionDisplay;
})();
var WeatherStation = (function () {
    function WeatherStation() {
    }
    WeatherStation.init = function () {
        WeatherStation.weatherData = new WeatherData();
        WeatherStation.currentConditionDisplay = new CurrentConditionDisplay(WeatherStation.weatherData);
        WeatherStation.weatherData.setMeasurments(20, 12, 3);
        WeatherStation.weatherData.setMeasurments(12, 22, 13);
    };
    return WeatherStation;
})();
WeatherStation.init();
//# sourceMappingURL=observator.js.map