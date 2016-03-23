angular.module("tylerFitzgerald", ['ngRoute','ui.bootstrap','ngAnimate'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                controller: "meController",
                templateUrl: "me.html"
            })
            .otherwise({
                redirectTo: "/"
            })
    })
