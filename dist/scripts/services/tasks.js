(function() {
     function Tasks() {
         var Jobs = [
          {
            "Name" : "Feed the Fish",
            "Age" : "1",
            "Completed" : "Yes"
          },
          {
            "Name" : "Water the Plants",
            "Age" : "6",
            "Completed" : "No"
          },     
          {
            "Name" : "Mop the Floor",
            "Age" : "8"
            "Completed" : "No"
          },
          {
            "Name" : "Do the Dishes",
            "Age" : "5"
            "Completed" : "No"
          }            
          ]
     };    
        
//         Fixtures.getAlbum = function() {
//            return albumPicasso;
//     };
//         
//         Fixtures.getCollection = function(numberOfAlbums) {
//            albumsArray = []; 
//            for (i=0; i < numberOfAlbums; i++) {
//                albumsArray.push(albumPicasso);
//            }           
//            return albumsArray; 
//     }
         
         return Jobs;
//     }
 
     angular
         .module('blocItOff')
         .factory('Tasks', Tasks);
 })();