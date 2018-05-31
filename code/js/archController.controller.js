angular.module('archApp')
    .controller('ArchController', ['$scope', '$state', 'TextualContentService', '$rootScope', '$timeout',
        function($scope, $state, TextualContentService, $rootScope, $timeout) {
            function openNewView(item) {
                $state.go(item.view);
            }
            function setItemsToClose() {
                _.each($scope.sidebarItems, function(item) {
                    item.open = false;
                });
            }
            function setItemToOpen(viewSlug) {
                var item = _.filter($scope.sidebarItems, function(item) {
                    return item.view === viewSlug;
                });

                setItemsToClose();

                if (item && item[0]) {
                    item[0].open = true;
                }
            }
            function sidebarItemsStateWatcher(omitStateChange) {
                var currentState = $state.current.name;

                switch (currentState) {
                    case 'details':
                        setItemToOpen('list_offers');

                        if (!omitStateChange) {
                            $state.go('list_offers');
                        }

                        break;
                    case 'contact':
                        setItemToOpen('contact');

                        if (!omitStateChange) {
                            $state.go('gallery');
                        }

                        break;
                    case 'gallery':
                        setItemToOpen('gallery');

                        if (!omitStateChange) {
                            $state.go('contact');
                        }

                        break;
                    /*case 'around':
                        setItemToOpen('around');

                        if (!omitStateChange) {
                            $state.go('contact');
                        }

                        break;*/
                }
            }

            $scope.goToGallery = function() {
                setItemsToClose();
                $state.go('gallery');
            };
            $scope.sidebarItems = [{
                iconClass: 'contact',
                view: 'contact',
                open: false
            }, {
                iconClass: 'offer',
                view: 'list_offers',
                open: true
            }, {
                iconClass: 'around',
                view: 'around',
                open: false
            }, {
                iconClass: 'gallery',
                view: 'gallery',
                open: false
            }];
            $scope.languageConfig = TextualContentService.getAvailableLanguages();

            $scope.changePageView = function(item) {
                setItemToOpen(item.view);
                openNewView(item);
            };
            $scope.changeLanguage = function(language) {
                TextualContentService.setActiveLanguage(language.slug);

                $rootScope.$broadcast('Actions.Everything.Reload');
            };

            $scope.$on('Action.Entry.details', function(event, params) {
                var editedEntry = params ? params.entry : null;

                setItemToOpen('list_offers');

                if (editedEntry) {
                    $state.go('details', {
                        offerId: editedEntry.id
                    });
                } else {
                    $state.go('list_offers');
                }
            });
            $scope.$on('Action.Entry.gallery', function() {
                setItemToOpen('gallery');

                $state.go('gallery');
            });
            $scope.$on('Action.Entry.contact', function(event, params) {
                setItemToOpen('contact');

                $state.go('contact', {
                    data: params.entry
                });
            });
            $scope.$on('Action.Entry.Breadcrumbs', function() {
                sidebarItemsStateWatcher();
            });

            $timeout(function() {
                sidebarItemsStateWatcher(true);
            }, 0);
        }]);
