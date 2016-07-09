(function() {
    'use strict';

    angular.module('app.home', ['app.directive','ui.router'])
    .config(config);

    function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/home/home.html'
        })
    }
})();
