'use strict';

angular.module('HybrisApp')
  .controller('MainCtrl', ['$scope', 'Weather', '$state', function ($scope, Weather, $state) {
      //Weather object.
      $scope.weather = { city: 'Munich', lang: 'hr' };
      //Default city
      $scope.search.city = 'Munich';
      //Default language
      $scope.search.lang = { name: 'Croatian', val: 'hr' };

      //Defined languages that the user can choose from.
      $scope.languages = [
         { name: 'English', val: 'en' },
         { name: 'German', val: 'de' },
         { name: 'Croatian', val: 'hr' },
         { name: 'Ukrainian', val: 'uk' },
      ];

      //If the city variable is empty make a call to server and retrive data.
      if (angular.isUndefined($scope.name)) {
          $scope.city = Weather.Munich.get({ lang: 'hr', q: 'Munich' });
      }

      //Changing the property directive is watching. 
      //This way the directive gets updated on button click instead of every change.
      $scope.searchCity = function () {
          $scope.weather = {
              city: $scope.search.city,
              lang: $scope.search.lang.val
          };
      };

      //Opening history
      $scope.openHistory = function () {
          $state.go('main.history', { id: $scope.city.id, lang: $scope.search.lang.val });
      };
  }]);
