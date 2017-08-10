(function () {
  'use strict';

  angular
    .module('myApp')
    .component('footerComponent', {
      templateUrl: '/app/footerComponent/footer.html',
      controller: footerCtrl,
      controllerAs: 'vm'
  });

  function footerCtrl() {
      var vm = this;
  }

})();
