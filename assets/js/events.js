$(function(){

  $(".dropdown-button").dropdown({ constrainWidth: false });
  $('.seccion').hover(function(){
      var tmp_src = $(this).find('img').attr('src');
      $(this).find('img').attr('src',$(this).find('img').attr('rel'));
      $(this).find('img').attr('rel',tmp_src);
  },function(){
    var tmp_src = $(this).find('img').attr('src');
    $(this).find('img').attr('src',$(this).find('img').attr('rel'));
    $(this).find('img').attr('rel',tmp_src);
  })
})
