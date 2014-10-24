/**
 * Created by Administrator on 2014/10/24.
 */
function MyController($scope){
    $scope.clock = {
        now:new Date()
    };
    var updateClock = function(){
        $scope.clock.now = new Date();
    }
    setInterval(function(){
        $scope.$apply()
    },1000)
    updateClock();
}