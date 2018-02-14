angular.module('archApp')
    .directive('pageMainHeader', ['$rootScope',
        function($rootScope) {
            return {
                restrict: 'E',
                templateUrl: 'html/page-main-header.html',
                replace: true,
                scope: {
                    filterInput: "=filterInput",
                    onSort: "=onSort",
                    onFilter: "=onFilter",
                    title: "=title",
                    breadcrumbs: "=breadcrumbs",
                    toggleInput: "=toggleInput",
                    toggle: "&toggle",
                    activeViewType: "=activeViewType",
                    existingTypes: "=existingTypes",
                    createNewEntry: "=createNewEntry",
                    extraInfo: '=extraInfo'
                },
                link: function(scope) {
                    scope.toggleView = function(type) {
                      scope.toggle({ type: type });
                    };
                    scope.create = function() {
                      scope.createNewEntry();
                    };
                    scope.redirectBreadcrumb = function() {
                        $rootScope.$broadcast('Action.Entry.Breadcrumbs');
                    };
                }
            };
    }]);
