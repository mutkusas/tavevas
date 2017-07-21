var myApp = angular.module('ServiseApp', ['ngMaterial']);

myApp.controller('MainController', ['$scope', function($scope) {
    me = this;
    me.message = 'Hola!';
}]);