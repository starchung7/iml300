
$(document).ready(function() {
  
    $('.flower').click(function(){
        $('p').toggle();
    });
       $('.flower2').hover(function () {
   
        $(this).toggleClass("bigger");
    });
    $(document).ready(function () {
    $(function () {
        $(".flower").draggable();
    });   
});
});
