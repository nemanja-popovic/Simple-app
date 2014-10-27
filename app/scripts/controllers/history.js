'use strict';

angular.module('HybrisApp')
  .controller('HistoryCtrl', ['$scope', 'Weather', '$stateParams', function ($scope, Weather, $stateParams) {
      $scope.history = Weather.CityHistory.get({ id: $stateParams.id, lang: $stateParams.lang, type: 'hour' });
  }]);
