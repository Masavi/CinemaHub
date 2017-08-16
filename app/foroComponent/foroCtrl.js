(function () {
  'use strict';

  angular
    .module('myApp')
    .component('foroComponent', {
      templateUrl: '/app/foroComponent/foro.html',
      controller: foroCtrl,
      controllerAs: 'vm'
  });

  function foroCtrl($http,$scope,$routeParams) {
      var vm = this;
      $http.get("http://localhost:5000/json/datos.json")
      .then(function (data) {
        data.data.forEach(function(valor){
            if(valor.id == $routeParams.id){
              $scope.foro = valor
              console.log($scope.foro)
            }
        });
      });
  }

})();
