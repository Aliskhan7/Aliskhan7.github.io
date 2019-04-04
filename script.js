$(window).scroll(function(){var e=document.getElementById("header"),t=document.getElementById("first_block");$(this).scrollTop()>e.offsetHeight?$("#header").addClass("head_none"):$("#header").removeClass("head_none"),$(this).scrollTop()>t.offsetHeight?$("#title_one").css("display","none"):$("#title_one").css("display","block")}),$(".mail-btn").on("click touchstart",function(){$(this).addClass("fly"),that=this,setTimeout(function(){$(that).removeClass("fly")},4400)});

menu.onclick = function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className == "topnav") {
    x.className += " responsive";
  }else{
    x.className = "topnav";
  }
}



jQuery(document).ready(function($) {

$(".ajax-contact-form").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "http://domain.name/contact.php",
data: str,
success: function(msg) {
if(msg == 'OK') {
result = '<p>Ваш заказ принят</p>';
$(".fields").hide();
} else {
result = msg;
}
$('.note').html(result);
}
});
return false;
});
});