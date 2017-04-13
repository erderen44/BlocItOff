(function() {
     function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
         .state('index', {
             url: '/',
             controller: 'indexCtrl as index',
             templateUrl: '/pages/index.html'
         })
         $stateProvider
         .state('home', {
             url: '/',
             controller: 'homeCtrl as home',
             templateUrl: '/templates/home.html'
         });
     }
 
     angular
         .module('blocItOff','firebase', ['ui.router'])
         .config(config);
 })();