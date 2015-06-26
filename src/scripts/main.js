var mainApp = angular.module('mainApp', []);

mainApp.controller('loginController', function ($scope, $http) {
  $scope.loginForm = {};
  $scope.login = function () {
    $http({
      method: 'POST',
      url: '/ajax/login',
      data: $scope.loginForm
    }).success(function (data) {
      alert('Login Successful');
      window.location = '/home';
    }).error(function (data) {
      alert(data.error_description);
    });
  }
});

mainApp.controller('registerController', function ($scope, $http) {
  $scope.registerForm = {};
  $scope.register = function () {
    $http({
      method: 'POST',
      url: '/ajax/register',
      data: $scope.registerForm
    }).success(function (data) {
      $scope.registerForm = {};
      alert('Registration Successful');
    }).error(function (data) {
      $scope.registerForm = {};
      alert(data.error_description);
    });
  }
});
