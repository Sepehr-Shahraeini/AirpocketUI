'use strict';
app.factory('mntService', ['$http', '$q', 'ngAuthSettings', '$rootScope', function ($http, $q, ngAuthSettings, $rootScope) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var ordersServiceFactory = {};

    var _getLLP = function (id) {

        return $http.get($rootScope.serviceMnt + 'api/mnt/get/aircraft/llp/' + id).then(function (results) {
            return results;
        });
    };
    var _getCheck = function (id) {

        return $http.get($rootScope.serviceMnt + 'api/mnt/get/aircraft/checks/aircraft/' + id).then(function (results) {
            return results;
        });
    };
    var _getADSB = function (id) {

        return $http.get($rootScope.serviceMnt + 'api/mnt/get/aircraft/adsbs/aircraft/' + id).then(function (results) {
            return results;
        });
    };
   var _getEngADSB = function (id) {

       return $http.get($rootScope.serviceMnt + 'api/mnt/get/aircraft/adsbs/engine/' + id).then(function (results) {
            return results;
        });
    };
     var _getEngLlp = function (id) {

       return $http.get($rootScope.serviceMnt + 'api/mnt/get/aircraft/llps/engine/' + id).then(function (results) {
            return results;
        });
    };
    var _saveLLP = function (entity) {
        var deferred = $q.defer();
        $http.post($rootScope.serviceMnt + 'api/mnt/aircraft/status', entity).then(function (response) {
            deferred.resolve(response.data);
        }, function (err, status) {

            deferred.reject(Exceptions.getMessage(err));
        });

        return deferred.promise;
    };

    var _saveADSB = function (entity) {
        var deferred = $q.defer();
        $http.post($rootScope.serviceMnt + 'api/mnt/aircraft/adsb/save', entity).then(function (response) {
            deferred.resolve(response.data);
        }, function (err, status) {

            deferred.reject(Exceptions.getMessage(err));
        });

        return deferred.promise;
    };

    var _saveCheck = function (entity) {
        var deferred = $q.defer();
        $http.post($rootScope.serviceMnt + 'api/mnt/aircraft/check/save', entity).then(function (response) {
            deferred.resolve(response.data);
        }, function (err, status) {

            deferred.reject(Exceptions.getMessage(err));
        });

        return deferred.promise;
    };

     var _saveEngStatus = function (entity) {
        var deferred = $q.defer();
         $http.post($rootScope.serviceMnt + 'api/mnt/engine/status', entity).then(function (response) {
            deferred.resolve(response.data);
        }, function (err, status) {

            deferred.reject(Exceptions.getMessage(err));
        });

        return deferred.promise;
    };

  

    ordersServiceFactory.getLLP = _getLLP;
    ordersServiceFactory.getADSB = _getADSB;
    ordersServiceFactory.getCheck = _getCheck;
    ordersServiceFactory.getEngADSB = _getEngADSB;
    ordersServiceFactory.getEngLlp = _getEngLlp;


    ordersServiceFactory.saveLLP = _saveLLP;
    ordersServiceFactory.saveADSB = _saveADSB;
    ordersServiceFactory.saveCheck = _saveCheck;
    ordersServiceFactory.saveEngStatus = _saveEngStatus;

    return ordersServiceFactory;

}]);