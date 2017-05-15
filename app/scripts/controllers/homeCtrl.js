(function() {
    function homeCtrl($scope, $firebaseArray) {
        var ref = firebase.database().ref()
        $scope.tasks = $firebaseArray(ref);
        $scope.tasks.$add({
            task: "Tidy Up", 
            age: 2,
            completed: "false"
            
//            {
//                text: $scope.newTaskText,
//                created: Firebase.ServerValue.TIMESTAMP,
//                date: $scope.newTaskDate.getTime(),
//                status: 'active',
//                expired: false,
//                priority: $scope.newTaskPriority
//            }
        });
        var item = $scope.tasks;
        console.log(item);
        console.log(item[2]);
        $scope.tasks.$remove( "Feed the Fish"  
            );
        
        $scope.deleteTask = function (id){
            $scope.tasks.$remove(id)
        }
//         $scope.removeTodo = function(todo) {
//        for (i=0; i<$scope.tasks.length; i++){
//                if ($scope.tasks.$indexFor[i].task == "Feed the Fish"){
//                    $scope.tasks.$remove($scope.tasks.$indexFor[i][task]);
//                }
//        } 
//        $scope.tasks = $firebaseArray(ref);
//        var anItem = $scope.tasks[2];
//        list.$remove(item).then(function(ref) {
//            ref.key === item.$id; // true
//            });     
//    $scope.todos.$remove(todo); 
//  };
//        $scope.hideOldTasks = function(oldTask){
//            $scope.tasks.$remove( "Do the Dishes"  
//            );
//        };
//        $scope.hideOldTasks("Do the Dishes");
        };
    angular
        .module('blocItOff')
        .controller('homeCtrl', ['$scope', '$firebaseArray', homeCtrl]);
})();


