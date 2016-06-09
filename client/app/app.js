'use strict';

angular.module('issue143App', ['issue143App.auth', 'issue143App.admin', 'issue143App.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap',
    'validation.match', 'auth0'
  ])
  .config(function($urlRouterProvider, $locationProvider, authProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
    //Configure Auth0
    authProvider.init({
      domain: 'chris92.auth0.com',
      clientID: 'NZLIDgaaGwXtq7AcfJGPhZWne2YiSY1l',
      loginUrl: '/login'
    });

    authProvider.on('loginSuccess', ['$rootScope', '$location', 'profilePromise', 'idToken',
    function($rootScope, $location, profilePromise, idToken) {
      // Successfully log in
      // Access to user profile and token
      profilePromise.then(function(profile){
        // profile
        console.log(profile);
        store.set('profile', profile);
        store.set('token', idToken);
        $rootScope.redirectModeProfile = profile
      });
      $location.url('/');
    }]);

  });
