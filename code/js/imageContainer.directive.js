angular.module('archApp')
    .directive('imageContainer', ['$document',
        function($document) {
            return {
                restrict: 'E',
                templateUrl: 'html/image-container.html',
                replace: true,
                scope: {
                    contentModel: "=contentModel",
                },
                link: function(scope, element) {
                    function bindEvents() {
                        if (scope.isFullSize) {
                            $document.on('click', function(event) {
                                event.preventDefault();
                                event.stopPropagation();

                                scope.isFullSize = false;
                                element.removeClass('full-size');

                                return $document.off('click', event);
                            });

                        }
                    }
                    scope.isFullSize = false;

                    scope.toggleView = function(event) {
                        event.preventDefault();
                        event.stopPropagation();

                        scope.isFullSize = !scope.isFullSize;

                        bindEvents();
                    };


                }
            };
        }]);
