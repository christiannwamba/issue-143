'use strict';

angular.module('issue143App.auth', ['issue143App.constants', 'issue143App.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
