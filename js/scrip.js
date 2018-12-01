// фиксация лого
$(window).scroll(function() {
  var heighBlock=document.getElementById('logo');
   var heightFirst=document.getElementById('scroll');
  if ($(this).scrollTop() > heighBlock.offsetHeight ) {
    $('#logo').addClass("logo_none");
  }
  else {
    $('#logo').removeClass("logo_none");
  };
  if ($(this).scrollTop() > heightFirst.offsetHeight ) {
    $('#logo').addClass("logo_return");
  }
  else {
    $('#logo').removeClass("logo_return");
  }

});


// модальное окно
$(document).ready(function() {
  $('a#modal').click( function(event){ 
    $("body").css("overflow", "hidden");
    $("#logo").css('display', 'none'); 
    event.preventDefault(); 
    $('#overlay').fadeIn(400, 
      function(){ 
        $('#modal_window' ) 
          .css('display', 'block') 
          .animate({opacity: 1, top: '-10%',}, 200); 
    });
  });
  /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
  $('#modal_close, #overlay').click( function(){ 
    $("body").css("overflow", "auto");
    $("#logo").css('display', 'block'); 
    $('#modal_window')
      .animate({opacity: 0, top: '0'}, 200, 
        function(){ 
          $(this).css('display', 'none'); 
          $('#overlay').fadeOut(400); 
        }
      );
  });
});