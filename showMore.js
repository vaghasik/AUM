app.directive('showMore', function() {
    return {
        templateUrl: 'partials/showMore.html',
        restrict: 'A',
        transclude: true,
        scope:{
            'showMoreHeight': '@'
        },
        controller: ['$scope', '$element', '$interval', function($scope, $element, $interval) {
            $scope.expanded = false;
            $scope.expandable = false;
            $scope.showToggle = false;

            $interval(function(){
                renderStyles();
            }, 700);

            function renderStyles(){
                if($element.height() >= $scope.showMoreHeight && $scope.expanded === false) {
                    $scope.expandable = true;
                }
                if($element.height() >= $scope.showMoreHeight) {
                    $scope.showToggle = true;
                } else {
                    $scope.showToggle = false;
                }
            }

            $scope.showLessStyle = {
                'max-height': $scope.showMoreHeight + 'px',
                'overflow': 'hidden'
            };

        }]
    };
});
