angular.module('archApp')
    .config(['$stateProvider', function($stateProvider) {

        $stateProvider
            .state('contact', {
                url: '/contact',
                controller: 'ContactCtrl',
                templateUrl: 'html/contact-page.html'
            })
            .state('gallery', {
                url: '/gallery',
                controller: 'GalleryCtrl',
                templateUrl: 'html/gallery-page.html',
                params: {
                    data: {}
                }
            })
            .state('list_offers', {
                url: '/list-offers',
                controller: 'ListOffersCtrl',
                templateUrl: 'html/list-offers-page.html'
            })
            .state('list_files', {
                url: '/list-file-entries',
                controller: 'ListFileEntriesCtrl',
                templateUrl: 'html/list-file-entries-page.html'
            })
            .state('details', {
                url: '/list-offers/{offerId}',
                controller: 'OfferDetailsCtrl',
                templateUrl: 'html/offer-details-page.html'
            });
    }]);
