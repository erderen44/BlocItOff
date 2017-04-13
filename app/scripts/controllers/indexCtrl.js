(function() {
    function IndexCtrl($scope, $firebaseArray) {
        var ref = firebase.database().ref();
        var list = $firebaseArray(ref);
    }
    
    angular
        .module('blocItOff')
        .controller('IndexCtrl', ['$scope', '$firebaseArray', IndexCtrl]);
})();


