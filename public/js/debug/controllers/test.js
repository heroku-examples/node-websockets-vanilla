app.$controllerProvider.register('TestCtrl', function($scope, Loading, $timeout) {
    Loading.start();
    $timeout(function(){
        Loading.finish();
    }, 1500);
});