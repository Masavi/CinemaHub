(function () {
  'use strict';

  angular
    .module('myApp')
    .component('navComponent', {
      templateUrl: '/app/topNavComponent/topNav.html',
      controller: navCtrl,
      controllerAs: 'vm'
  });

  function navCtrl($scope) {

      $scope.signin = function(){
        $('#modal_signin').modal('open')
      }


  }

})();
