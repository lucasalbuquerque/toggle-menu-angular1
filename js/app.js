var app = angular.module('lasite', ['ngRoute','ngAnimate']);

app.config(['$routeProvider', function($routeProvider){$routeProvider
    .when("/", {templateUrl: "templates/home.html", controller: "HomeCtrl"})
    .when("/quemsou", {templateUrl: "templates/quemsou.html", controller: "QuemSomosCtrl"})
    .when("/cases", {templateUrl: "templates/cases.html", controller:"CasesCtrl"})
    .when("/contato", {templateUrl: "templates/contato.html", controller:"ContatoCtrl"})
    .when("/404", {templateUrl: "templates/404.html"})
    .otherwise({redirectTo: '/404'});
}]);

app.controller('HomeCtrl', function($scope, $location){

});

app.controller('QuemSomosCtrl', function($scope, $location){

});

app.controller('CasesCtrl', function($scope, $location){

});

app.controller('ContatoCtrl', function($scope, $location){

});
