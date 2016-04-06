angular.module("tylerFitzgerald", ['ngRoute','ui.bootstrap','ngAnimate'])
    .config(function($routeProvider) {
        $routeProvider
            .when("", {
                templateUrl: "partials/me.html",
                params: {tab: '0'}
            })
            .when("/", {
                templateUrl: "partials/me.html",
                params: {tab: '0'}
            })
            .when("/experience", {
                templateUrl: "partials/experience.html",
                params: {tab: '1'}
            })
            .when("/resume", {
                templateUrl: "partials/resume.html"
            })
            .when("/contact", {
                templateUrl: "partials/contact.html"
            })
            .when("/webapp", {
                templateUrl: "partials/webApp.html"
            })
            .otherwise({
                redirectTo: "/"
            })
    })
