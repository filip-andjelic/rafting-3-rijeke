angular.module('archApp')
    .service('DatabaseEntryCache', ['Utility', '$rootScope', '$http', 'API_BASE', '$q', 'Categories',
        function(Utility, $rootScope, $http, API_BASE, $q, Categories) {
        function getUserEmptyModel() {
            return {
                name: '',
                id: '0',
                role: '',
                description: '',
                entryType: 'user',
            };
        }
        function getCarEmptyModel() {
            return {
                model: '',
                id: '0',
                serie: '',
                price: '',
                description: '',
                entryType: 'car'
            };
        }
        function getFileEmptyModel() {
            return {
                name: '',
                id: '0',
                type: '',
                description: '',
                entryType: 'file'
            };
        }
        function getDefaultUserEntries() {
            return $http.get(API_BASE + '/users').then(function(response) {
               if (response && response.data) {
                   existingUsersCache = response.data;
               }
            });
        }
        function getDefaultCarEntries() {
            return $http.get(API_BASE + '/cars').then(function(response) {
                if (response && response.data) {
                    existingCarsCache = response.data;
                }
            });
        }
        function getDefaultFileEntries() {
            return $http.get(API_BASE + '/files').then(function(response) {
                if (response && response.data) {
                    existingFilesCache = response.data;
                }
            });
        }
        function alterExistingCacheItem(cache, updatedItem) {
            if (updatedItem.id === '0' || !updatedItem.id) {
                updatedItem.id = Utility.generateRandomString(9);
                cache.unshift(updatedItem);
            } else {
                _.each(cache, function(item) {
                    if (item.id === updatedItem.id) {
                        _.each(item, function(value, property) {
                            if (updatedItem[property] !== undefined || updatedItem[property] !== null) {
                                item[property] = updatedItem[property];
                            }
                        });
                    }
                });
            }
        }

        var existingUsersCache = [];
        var existingCarsCache = [];
        var existingFilesCache = [];
        var DatabaseEntryCache = {};

        DatabaseEntryCache.getExistingEntries = function(type) {
            var promise = $q.defer();

            switch (type) {
                case 'users':
                    if (!_.isEmpty(existingUsersCache)) {
                        setTimeout(promise.resolve(_.cloneDeep(existingUsersCache)), 200);

                        return promise.promise;
                    }

                    return getDefaultUserEntries().then(function() {
                        var users = existingUsersCache;

                        _.each(users, function(user) {
                           user.entryType = 'user';
                           user.specialIcon =  Categories.getClassSuffix(user);
                        });

                        return _.cloneDeep(users);
                    });
                    break;
                case 'cars':
                    if (!_.isEmpty(existingCarsCache)) {
                        setTimeout(promise.resolve(_.cloneDeep(existingCarsCache)), 200);

                        return promise.promise;
                    }

                    return getDefaultCarEntries().then(function() {
                        var cars = existingCarsCache;

                        _.each(cars, function(car) {
                            car.entryType = 'car';
                        });

                        return _.cloneDeep(cars);
                    });
                    break;
                case 'files':
                    if (!_.isEmpty(existingFilesCache)) {
                        setTimeout(promise.resolve(_.cloneDeep(existingFilesCache)), 200);


                        return promise.promise;
                    }

                    return getDefaultFileEntries().then(function() {
                        var files = existingFilesCache;

                        _.each(files, function(file) {
                            file.entryType = 'file';
                            file.specialIcon =  Categories.getClassSuffix(file);
                        });

                        return _.cloneDeep(files);
                    });
                    break;
            }
        };
        DatabaseEntryCache.getEmptyEntryModel = function(entryType) {
            var emptyModel = getCarEmptyModel();

            if (entryType === 'user') {
                emptyModel = getUserEmptyModel();
            } else if (entryType === 'file') {
                emptyModel = getFileEmptyModel();
            }

            return emptyModel;
        };
        DatabaseEntryCache.addNewEntry = function(entry) {
            var newEntry = {};

            if (entry.entryType === 'car') {
                newEntry = getCarEmptyModel();

                alterExistingCacheItem(existingCarsCache, newEntry);
            } else if (entry.entryType === 'user') {
                newEntry = getUserEmptyModel();
                newEntry.specialIcon =  Categories.getClassSuffix(newEntry);

                alterExistingCacheItem(existingUsersCache, newEntry);
            } else if (entry.entryType === 'file') {
                newEntry = getFileEmptyModel();
                newEntry.specialIcon =  Categories.getClassSuffix(newEntry);
                newEntry.created = moment().toDate();

                alterExistingCacheItem(existingFilesCache, newEntry);
            }
        };
        DatabaseEntryCache.destroyEntry = function(entry) {
            switch (entry.entryType) {
                case 'car':
                    existingCarsCache = _.filter(existingCarsCache, function(cachedEntry) {
                       return entry.id !==  cachedEntry.id;
                    });
                    break;
                case 'user':
                    existingUsersCache = _.filter(existingUsersCache, function(cachedEntry) {
                        return entry.id !==  cachedEntry.id;
                    });
                    break;
                case 'file':
                    existingFilesCache = _.filter(existingFilesCache, function(cachedEntry) {
                        return entry.id !==  cachedEntry.id;
                    });
                    break;
            }

            $rootScope.$broadcast('Action.Entry.reload-items');
        };

        return DatabaseEntryCache;
    }]);
