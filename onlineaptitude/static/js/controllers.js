angular.module('TrackingApp.controllers',[])
.controller('MasterCtrl', function($log,$scope,networkCallService){
	console.log("MasterCtrl loaded...");


})

.controller('fillQuestionCtrl', function($log,$scope,networkCallService){
	console.log("fillQuestionCtrl loaded...");


})

.controller('testCategoriesCtrl', function($log,$scope,networkCallService,$state){
	console.log("testCategoriesCtrl loaded...");

		$scope.fillQuestionOption = function(){
			$state.go('fillQuestions');
		};
});
