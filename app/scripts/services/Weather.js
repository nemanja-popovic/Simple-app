'use strict';

angular.module('HybrisApp')
    .constant('API_KEY', '1111111111')
    .constant('CityURL', 'http://api.openweathermap.org/data/2.5/weather')
    .constant('CityHistoryURL', 'http://api.openweathermap.org/data/2.5/history/city')
    .service('Weather', ['$resource', 'API_KEY', 'CityURL', 'CityHistoryURL', function ($resource, API_KEY, CityURL, CityHistoryURL) {
        this.Munich = $resource(CityURL, { apiid: API_KEY });

        this.CityHistory = $resource(CityHistoryURL, { apiid: API_KEY });
    }]);
