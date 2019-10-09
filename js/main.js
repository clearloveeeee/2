$(function() {
    $('#bt1').click(function() {
        $("#mask2").fadeTo(1000,0);
        setTimeout(function () { disapear(); },1000);        
        setTimeout('$("#mask1").fadeTo(1000,1)',1000);
    });
   });
function disapear() {
    document.getElementById("mask2").style.display='none';
    
}
$('.carousel').carousel({
    interval: 2000,
  })