var app=angular.module('books',['ngRoute','bookStoreCtrls']); //books模块依赖另外2个模块
app.config(function($routeProvider){ //ng-view需要路由才能使用，$routeProvider路由
    $routeProvider.when('/hello',{  //访问路径
        templateUrl:'tpls/hello.html',
        controller:'sayHello'
    }).when('/list',{   //访问路径
        templateUrl:'tpls/list.html',
        controller:'list'
    }).otherwise({  //默认访问路径
        redirectTo:'/hello'
    })
});