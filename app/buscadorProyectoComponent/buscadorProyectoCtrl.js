(function () {
  'use strict';

  angular
    .module('myApp')
    .component('buscadorproyectoComponent', {
      templateUrl: '/app/buscadorProyectoComponent/buscadorProyecto.html',
      controller: buscadorProyectoCtrl,
      controllerAs: 'vm'
  });

  function buscadorProyectoCtrl($scope,$http) {
    $http.get("http://localhost:5000/json/proyectos.json")
    .then(function (data) {
      $scope.proyectos = data.data;
    });

      var vm = this;
      $scope.ir_foro = function(id_foro){
        window.location.href ="#!foro/"+id_foro
      }
  }

})();
