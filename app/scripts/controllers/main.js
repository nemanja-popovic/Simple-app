'use strict';

angular.module('HybrisApp')
  .controller('MainCtrl', ['$scope', 'Weather', '$state', function ($scope, Weather, $state) {
      //Search object
      $scope.search.lang = { name: 'Croatian', val: 'hr' };

      //Defined languages that the user can choose from
      $scope.languages = [
         { name: 'English', val: 'en' },
         { name: 'German', val: 'de' },
         { name: 'Croatian', val: 'hr' },
         { name: 'Ukrainian', val: 'uk' },
      ];

      //If the city variable is empty make a call to server and retrive data
      if (angular.isUndefined($scope.name)) {
          $scope.city = Weather.Munich.get({ lang: 'hr', q: 'Munich' });
      }

      //For searching the weather for city
      $scope.searchCity = function () {
          //Double checking that everything is defined
          if (angular.isUndefined($scope.search) || angular.isUndefined($scope.search.lang) || angular.isUndefined($scope.search.city)) {
              $scope.error = 'All parameters must be specified. Please try again.';
          }
          else {
              //Making call to server
              $scope.error = null;
              $scope.city = Weather.Munich.get({ lang: $scope.search.lang.val, q: $scope.search.city });
          }
      };

      //Opening history
      $scope.openHistory = function () {
          $state.go('main.history', { id: $scope.city.id, lang: $scope.search.lang.val });
      };
  }]);
