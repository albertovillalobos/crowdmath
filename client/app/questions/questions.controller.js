'use strict';

angular.module('crowdmathApp')
  .controller('QuestionsCtrl', function ($scope, $stateParams, $http, socket) {
    $scope.message = 'Hello';
    $scope.question = [];
    $scope.solutions = [];

    $http.get('/api/questions/'+$stateParams.id).success(function (question) {
    	$scope.question = question;
    	console.log(question);
	
	    $http.get('/api/solutions/byQuestion/'+$scope.question.number).success(function (solutions) {
	    	$scope.solutions = solutions;
	    	console.log($scope.solutions);
	    });

    	// $http.get('/api/solutions/'+ $scope.question.id)
		// socket.syncUpdates('solu', $scope.questions);    	
		socket.syncUpdates('solution', $scope.solutions);
    });



	$scope.addSolution = function(questionId) {
      if($scope.newSolution === '') {
        return;
      }
      $http.post('/api/solutions', { name: $scope.newSolution, question: questionId });
      $scope.newSolution = '';
      $scope.questionId = '';
    };

    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/solutions/' + thing._id);
    // };

    // $scope.$on('$destroy', function () {
    //   socket.unsyncUpdates('thing');
    // });

  });
