(function () {
  'use strict';

  angular
    .module('myApp')
    .component('buscadorforoComponent', {
      templateUrl: '/app/buscadorforoComponent/buscadorForo.html',
      controller: buscadorForoCtrl,
      controllerAs: 'vm'
  });

  function buscadorForoCtrl($scope,$http) {
    $http.get("http://localhost:5000/json/datos.json")
    .then(function (data) {
      $scope.foros = data.data;
    });

      var vm = this;
      $scope.ir_foro = function(id_foro){
        window.location.href ="#!foro/"+id_foro
      }
  }

})();
