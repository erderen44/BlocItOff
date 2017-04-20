(function() {
     function Tasks() {
         var jobs = [
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
            "Age" : "8",
            "Completed" : "No"
          },
          {
            "Name" : "Do the Dishes",
            "Age" : "5",
            "Completed" : "No"
          }            
          ]
        return jobs;
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
         
        
//     }
 
     angular
         .module('blocItOff')
         .factory('Tasks', Tasks);
 })();