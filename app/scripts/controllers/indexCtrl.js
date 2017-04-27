(function() {
    function indexCtrl($scope, $firebaseArray) {
        var ref = firebase.database().ref();
        var list = $firebaseArray(ref);
        $scope.list = list;
    }
    
    angular
        .module('blocItOff')
        .controller('indexCtrl', ['$scope', '$firebaseArray', indexCtrl]);
})();


