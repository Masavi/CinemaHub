(function () {
  'use strict';

  angular
    .module('myApp')
    .component('signinComponent', {
      templateUrl: '/app/signinComponent/signin.html',
      controller: signinCtrl,
      controllerAs: 'vm'
  });

  function signinCtrl($scope) {
      var vm = this;

      $scope.modalin = function(){
        $('#modal_signin').modal('open')
      }
  }

})();
