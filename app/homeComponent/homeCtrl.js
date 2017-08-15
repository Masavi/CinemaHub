(function () {
  'use strict';

  angular
    .module('myApp')
    .component('homeComponent', {
      templateUrl: '/app/homeComponent/home.html',
      controller: homeCtrl,
      controllerAs: 'vm'
  });

  function homeCtrl() {
      var vm = this;
      $('.parallax').parallax();
  }

})();
