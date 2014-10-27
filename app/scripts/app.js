'use strict';

angular.module('HybrisApp', [
  'ngResource',
  'ui.router'
])
    .config(function ($httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/#/city');

        var main = {
            name: 'main',
            url: '',
            template: '<div>\
          <div ui-view></div>\
          </div>',
            controller: function ($scope) {
                $scope.city = {};
                $scope.search = {};
            }
        };

        var city = {
            name: 'main.city',
            parent: main,
            url: '/city',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        };
        var history = {
            name: 'main.history',
            parent: main,
            url: '/history/:id/:lang',
            templateUrl: 'views/history.html',
            controller: 'HistoryCtrl'
        };

        $stateProvider.state(main);
        $stateProvider.state(city);
        $stateProvider.state(history);

    }]);