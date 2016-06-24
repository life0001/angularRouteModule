var bookStoreCtrls=angular.module('bookStoreCtrls',[]);
//控制器
bookStoreCtrls.controller('sayHello',['$scope',function($scope){
    $scope.a={
        say:'hello angular!!'
    }
}]);
//控制器
bookStoreCtrls.controller('list',['$scope',function($scope){
    $scope.books=[
        {
        title:'书名1',
        name:'钱钟书'
        },
        {
            title:'书名2',
            name:'李白'
        },
        {
            title:'书名3',
            name:'杜浦'
        }
    ]
}])
