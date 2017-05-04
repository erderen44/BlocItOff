(function() {
    function homeCtrl($scope, $firebaseArray) {
        
        console.log("tasks")
         var tasksRef = new Firebase("https://blocitoff-e911e.firebaseio.com/");
//         
//         $scope.tasks = $firebaseArray(tasksRef);
//        console.log($scope.tasks)
//         var jobs = ["Feed the Fish","Water the Plants","Mop the Floor","Do the Dishes"];
//          $scope.addTask = function() {   
//                $scope.tasks.$add({
//              jobs
////              return jobs;
//                });
//            };
        };
    
    angular
        .module('blocItOff')
        .controller('homeCtrl', ['$scope', '$firebaseArray', homeCtrl]);
})();


