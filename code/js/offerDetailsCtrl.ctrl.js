angular.module('archApp')
    .controller('OfferDetailsCtrl', ['$scope', '$state', 'TextualContentService',
        function($scope, $state, TextualContentService) {
            if ($state.params && $state.params.offerId) {
                $scope.offerId = $state.params.offerId;
                $scope.existingEntry = TextualContentService.getOfferSectionText(TextualContentService.getActiveLanguage().slug, false, $scope.offerId);
                $scope.breadcrumbs = [];
                $scope.breadcrumbs.push(TextualContentService.getOfferPageTitle(TextualContentService.getActiveLanguage().slug));
                $scope.breadcrumbs.push($scope.existingEntry.title);
                $scope.extraInfo = $scope.existingEntry.price;

            } else {
                $state.go('list_offers');
            }
        }]);
