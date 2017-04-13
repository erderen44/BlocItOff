(function() {
    function HomeCtrl($scope) {
    }
    
    angular
        .module('blocItOff')
        .controller('HomeCtrl', ['$scope', '$firebaseArray', HomeCtrl]);
})();
