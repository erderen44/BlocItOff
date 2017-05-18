(function() {
    function homeCtrl($scope, $firebaseArray) {
        var ref = firebase.database().ref()
        $scope.tasks = $firebaseArray(ref);
        $scope.addATask = function () {
            console.log("Is this working? " + $scope.anAddedTask);
            $scope.tasks.$add({
                task: $scope.anAddedTask, 
                age: 2,
                completed: "false"
            });
        };                  
                
//            {
//                text: $scope.newTaskText,
//                created: Firebase.ServerValue.TIMESTAMP,
//                date: $scope.newTaskDate.getTime(),
//                status: 'active',
//                expired: false,
//                priority: $scope.newTaskPriority
//            }
        


            $scope.deleteTask = function (id){
                $scope.tasks.$remove(id)
            }
//         $scope.removeTodo = function(todo) {
//        for (i=0; i<$scope.tasks.length; i++){
//                if ($scope.tasks.$indexFor[i].task == "Feed the Fish"){
//                    $scope.tasks.$remove($scope.tasks.$indexFor[i][task]);
//                }

        };
    angular
        .module('blocItOff')
        .controller('homeCtrl', ['$scope', '$firebaseArray', homeCtrl]);
})();


