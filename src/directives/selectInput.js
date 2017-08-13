module.exports = angular.module('glook.travelPayoutsSearchComponent').directive('selectInput', ['$window', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('click', function () {
                var input = element.find(document.getElementsByTagName('input'));
                if (!$window.getSelection().toString()) {
                    // Required for mobile Safari
                    angular.element(input[0]).focus();
                    input[0].setSelectionRange(0, input[0].value.length)
                }
            });
        }
    };
}]);