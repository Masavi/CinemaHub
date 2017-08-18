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

      $('.materialcaja').materialbox();

      $scope.editor = 'tom';
         $scope.enviarComentario = function () {
           //$('#modal_signin').modal('open')
           //texto = $('.simditor').find('.simditor-body').html();
           var $nuevo_elemento = $('.comentario_container');

           $scope.comentarios.push({
             "id": 4,
             "mensaje": $('.simditor').find('.simditor-body').html(),
             "autor": {
               "nombre":"Yo",
               "img":$('#img-logo').attr('src'),
               "trofeos":{
                 "cobre":"3"
               }

             }})
             $('.simditor').find('.simditor-body').html('');

         }


      $http.get("http://localhost:5000/json/datos.json")
      .then(function (data) {
        data.data.forEach(function(valor){
            if(valor.id == $routeParams.id){
              $scope.foro = valor
              console.log($scope.foro)
            }
        });

        $http.get("http://localhost:5000/json/comentario.json?")
        .then(function (data) {
          $scope.comentarios = data.data

        });
      });
  }

})();
