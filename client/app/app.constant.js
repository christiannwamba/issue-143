(function(angular, undefined) {
'use strict';

angular.module('issue143App.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin']})

;
})(angular);