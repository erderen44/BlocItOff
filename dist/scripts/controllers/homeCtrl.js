(function() {
    function homeCtrl($scope, Tasks, $firebaseArray) {
       $scope.jobs = Tasks;
    }
    
    angular
        .module('blocItOff')
        .controller('homeCtrl', ['$scope', 'Tasks', '$firebaseArray', homeCtrl]);
})();

//(function () {
//    function CollectionCtrl(Fixtures) {
//        this.albums = Fixtures.getCollection(12);
//     }
// 
//     angular
//         .module('blocJams')
//         .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
// })();

