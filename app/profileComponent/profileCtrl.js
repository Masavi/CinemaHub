(function () {
  'use strict';

  angular
    .module('myApp')
    .component('profileComponent', {
      templateUrl: '/app/profileComponent/profile.html',
      controller: profileCtrl,
      controllerAs: 'vm'
  });

  function profileCtrl() {
      var vm = this;
  }

})();
