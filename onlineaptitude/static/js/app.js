angular.module('TrackingApp', ['TrackingApp.controllers','ui.bootstrap','ui.router','TrackingApp.services'])
.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/test/categories');

    $stateProvider
    .state('home', {
        url: '/home'
    })

    .state('fillQuestions', {
        url: '/fill/questions',
        templateUrl: 'fillQuestion.html',
        controller: 'fillQuestionCtrl'
    })

     .state('testCategories', {
        url: '/test/categories',
        templateUrl: 'testCategories.html',
        controller: 'testCategoriesCtrl'
    });

    // .state('testCategories', {
    //     url: '/test/categories',
    //     templateUrl: '/templates/admin/testCategories.html',
    //     controller: 'testCategoriesCtrl'
    // });
});
