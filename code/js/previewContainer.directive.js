angular.module('archApp')
    .directive('previewContainer', [function() {
        return {
            restrict: 'E',
            templateUrl: 'html/preview-container.html',
            replace: true,
            scope: {
                contentModel: '=contentModel',
                containerClass: '@containerClass',
                iconClass: '@iconClass'
            },
            link: function(scope) {
                scope.getMainTitle = function() {
                    var title = scope.contentModel.title;

                    return title;
                };
                scope.getSubTitle = function() {
                    var title = scope.contentModel.subTitle;

                    return title;
                };
                scope.getMainContent = function() {
                    var content = scope.contentModel.content;

                    return content;
                };
                scope.getSubContent = function() {
                    var content = scope.contentModel.subContent;

                    return content;
                };
                scope.getPrice = function() {
                    return scope.contentModel.price;
                };
            }
        }
    }]);
