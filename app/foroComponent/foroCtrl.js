(function () {
  'use strict';

  angular
    .module('myApp')
    .component('foroComponent', {
      templateUrl: '/app/foroComponent/foro.html',
      controller: foroCtrl,
      controllerAs: 'vm'
  });

  function foroCtrl() {
      var vm = this;
  }

})();
