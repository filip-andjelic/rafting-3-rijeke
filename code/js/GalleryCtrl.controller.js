angular.module('archApp')
    .controller('GalleryCtrl', [
        '$scope',
        'TextualContentService',
        'GalleryService',
        function($scope, TextualContentService, GalleryService) {
            function initialize() {
                $scope.existingEntries = GalleryService.getFrames();
                $scope.title = TextualContentService.getGalleryPageTitle(TextualContentService.getActiveLanguage().slug);
            }

            $scope.hasEntriesToShow = function() {
                return $scope.existingEntries ? Object.keys($scope.existingEntries).length : false;
            };

            initialize();

            $scope.$on('Actions.Everything.Reload', function() {
                initialize();
            });
        }
    ]);
