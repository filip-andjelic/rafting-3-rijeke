angular.module('archApp')
    .directive('previewActionsContainer', ['$rootScope', 'Categories', 'TextualContentService',
        function($rootScope, Categories, TextualContentService) {
        return {
            restrict: 'E',
            templateUrl: 'html/preview-actions-container.html',
            replace: true,
            scope: {
                contentModel: '=contentModel',
                containerClass: '@containerClass',
                iconClass: '@iconClass'
            },
            link: function(scope) {
                function initialize() {
                    scope.actions = {
                        details: {
                            title: '',
                            slug: 'details',
                            className: 'offer-details'
                        },
                        contact: {
                            title: '',
                            slug: 'contact',
                            className: 'contact-us'
                        }
                    };

                    _.each(TextualContentService.getOfferActions(), function(translation, action) {
                        scope.actions[action].title = translation[TextualContentService.getActiveLanguage().slug];
                    });
                }
                if (scope.contentModel.type) {
                    initialize();
                }

                scope.getEntryClassType = Categories.getCategoryIcon;
                scope.triggerEntityAction = function(actionName) {
                    scope.triggerActionsToggle(false);

                    $rootScope.$broadcast('Action.Entry.' + actionName, {
                        entry: scope.contentModel
                    });
                };
                scope.triggerActionsToggle = function(show) {
                    scope.showActions = show;
                };

                scope.$on('Actions.Everything.Reload', function() {
                    initialize();
                });
            }
        }
    }]);
