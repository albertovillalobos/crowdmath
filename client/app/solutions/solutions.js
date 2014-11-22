'use strict';

angular.module('crowdmathApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('solutions', {
        url: '/solutions/:id',
        templateUrl: 'app/solutions/solutions.html',
        controller: 'SolutionsCtrl'
      });
  });