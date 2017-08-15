
(function(){
  'use strict';
  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
        $routeProvider
        .when('/',{
        template: '<home-component></home-component>',
        controllerAs: 'vm'
      }).when('/perfil',{
        template: '<profile-component></profile-component>',
        controllerAs: 'vm'
    });
}

angular
  .module('myApp')
  .config(config);

})();
