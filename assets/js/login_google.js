function onSignIn(googleUser) {

  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  $('#modal_signin').modal('close')

  $('.opciones_sesion').hide('slow',function(){
    $('#img-logo').attr('src',profile.getImageUrl());
    $('#img-pres').attr('src',profile.getImageUrl());
    $('#nombre_pila').html('<small>Bienvenido</small><br>'+profile.getName().split(' ')[0])

    $('#mi_perfil').show('fast')

  });

  console.log('correo: ' + profile.getEmail()); // This is null if the 'correo' scope is not present.
}
//naljGdHLgiq4JJJ5ACQUhWhL
