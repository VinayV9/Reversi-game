var app = angular.module('myApp', []);
app.controller('gameJoinCtrl', function($scope) {
   
});

app.controller('gameCreateCtrl',function($scope, $http){
     $scope.create= function(){
         var code=[6];
         for(var i=6;i>=0;i--){
             // generate random numbers btw 0 and 9 (inclusive)
            code[i]=Math.floor((Math.random() * 10));
         }
     }
});