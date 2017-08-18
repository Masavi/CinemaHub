(function () {
  'use strict';

  angular
    .module('myApp')
    .component('homeComponent', {
      templateUrl: '/app/homeComponent/home.html',
      controller: homeCtrl,
      controllerAs: 'vm'
  });

  function homeCtrl($scope) {
      var vm = this;
      $('.parallax').parallax();

        $('.seccion').hover(function(){
            var tmp_src = $(this).find('img').attr('src');
            $(this).find('img').attr('src',$(this).find('img').attr('rel'));
            $(this).find('img').attr('rel',tmp_src);
        },function(){
          var tmp_src = $(this).find('img').attr('src');
          $(this).find('img').attr('src',$(this).find('img').attr('rel'));
          $(this).find('img').attr('rel',tmp_src);
        })

        $scope.ir_lugar = function(lugar){
          window.location.href ="#!"+lugar
        }

  }

})();
