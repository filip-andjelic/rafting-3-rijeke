angular.module('archApp')
    .controller('ContactCtrl', [
        '$scope',
        '$state',
        'Categories',
        'TextualContentService',
        '$sce',
        '$timeout',
        '$rootScope',
        function($scope, $state, Categories, TextualContentService, $sce, $timeout, $rootScope) {
            function bindContentLinks() {
                var galleryLink = angular.element('#contact-page #contact-gallery');
                var offerLink = angular.element('#contact-page #contact-offer');

                galleryLink.on('click', function() {
                    $rootScope.$broadcast('Action.Entry.gallery');
                });
                offerLink.on('click', function() {
                    $rootScope.$broadcast('Action.Entry.details');
                });
            }
            function bindGoogleMap() {
                var map = new GMaps({
                    div: '#google-map',
                    lng: 18.840179,
                    lat: 43.348141,
                    zoom: 17,

                });

                map.addMarker({
                    lat: 43.348141,
                    lng: 18.840179,
                    title: 'Rafting Camp `Tri Rijeke`'
                });
            }
            function bindPageContent() {
                bindContentLinks();
                bindGoogleMap();
            }
            function initialize() {
                var textualContent = TextualContentService.getContactPageContent(TextualContentService.getActiveLanguage().slug);

                $scope.title = textualContent.title;
                $scope.ourLocation = textualContent.location;
                $scope.contactUs = textualContent.contact;
                $scope.fewWords = textualContent.about;

                $scope.aboutContent = textualContent.aboutContent;
                $scope.locationContent = textualContent.locationContent;
                $scope.contactContent = $sce.trustAsHtml(textualContent.contactContent);

                $timeout(bindPageContent, 1000);
            }

            $scope.activeViewType = 'breadcrumb';

            $scope.toggleView = function(type) {
                $scope.activeViewType = type;
            };

            initialize();

            $scope.$on('Actions.Everything.Reload', function() {
                initialize();
            });
        }
    ]);
