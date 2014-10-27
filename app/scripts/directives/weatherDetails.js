'use strict';

angular.module('HybrisApp')
  .directive('weatherDetails', ['Weather', function (Weather) {
      return {
          templateUrl: 'views/weather-details.html',
          restrict: 'E',
          scope: {
              cityName: '=cityName',
              lang: '=lang'
          },
          controller: function ($scope) {
              $scope.$watch("cityName", function (newValue, oldValue) {
                  //Making call to server
                  if (angular.isUndefined($scope.lang)) {
                      $scope.lang = 'en';
                  }
                  $scope.city = Weather.Munich.get({ lang: $scope.lang, q: $scope.cityName });
              });
              $scope.$watch("lang", function (newValue, oldValue) {
                  //Making call to server
                  if (angular.isUndefined($scope.lang)) {
                      $scope.lang = 'en';
                  }
                  $scope.city = Weather.Munich.get({ lang: $scope.lang, q: $scope.cityName });
              });
          }
      }
  }]);
