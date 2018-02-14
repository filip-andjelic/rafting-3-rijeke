angular.module('archApp')
    .controller('ListOffersCtrl', [
        '$scope',
        '$state',
        'Categories',
        'TextualContentService',
        function($scope, $state, Categories, TextualContentService) {
            function initialize() {
                $scope.existingEntries = TextualContentService.getOfferSectionText(TextualContentService.getActiveLanguage().slug, true);
                $scope.title = TextualContentService.getOfferPageTitle(TextualContentService.getActiveLanguage().slug);
            }

            $scope.activeViewType = 'breadcrumb';

            $scope.hasEntriesToShow = function() {
                return $scope.existingEntries ? Object.keys($scope.existingEntries).length : false;
            };
            $scope.toggleView = function(type) {
                $scope.activeViewType = type;
            };

            initialize();

            $scope.$on('Actions.Everything.Reload', function() {
                initialize();
            });
        }
    ]);
