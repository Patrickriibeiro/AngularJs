angular.module("meuModulo", [])

.config(function($routeProvider){
   $routeProvider
     .when("/home", { 
        templateUrl: "template/home.html",
        controller:"indexController"
    })
    .when("/contato", {
          templateUrl:"templates/contato.html",
          controller:"contatoController"
    });

    $routeProvider.otherwise({redirectTo:"/home"});

})