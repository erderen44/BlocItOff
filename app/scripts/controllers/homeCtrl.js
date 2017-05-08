(function() {
    function homeCtrl($scope, $firebaseArray) {
        var ref = firebase.database().ref()
        $scope.tasks = $firebaseArray(ref);
//         var jobs = "Feed the Fish","Water the Plants","Mop the Floor","Do the Dishes"];
        $scope.tasks.$add({
            task: "Clean"
        });
        };
    
    angular
        .module('blocItOff')
        .controller('homeCtrl', ['$scope', '$firebaseArray', homeCtrl]);
})();


