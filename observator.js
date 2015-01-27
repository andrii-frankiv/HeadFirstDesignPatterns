var WeatherData = (function () {
    function WeatherData() {
    }
    WeatherData.prototype.WeatherData = function () {
        this.observers = [];
    };
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
    function CurrentConditionDisplay() {
    }
    return CurrentConditionDisplay;
})();
//# sourceMappingURL=observator.js.map