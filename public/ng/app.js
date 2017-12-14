var app = angular.module('myApp', []);
app.controller('gameJoinCtrl', function($scope) {
   ;
});

app.controller('gameCreateCtrl',function($scope, $http){
    $scope.generateCode=false;
    $scope.Code;
    var code=[6];
     $scope.create= function(){
         for(var i=6;i>=0;i--){
             // generate random numbers btw 0 and 9 (inclusive)
            code[i]=Math.floor((Math.random() * 10));
         }
         $scope.Code=code.join("");

         $http.post('/start2Player', { code:code.join("")}).
         then(function(response) {
            console.log("posted successfully");
        }).catch(function(response) {
            console.error("error in posting");
        });
         $scope.generateCode=true;
     }
});