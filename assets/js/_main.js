function scrollNav() {
  $('a[href*=#]:not([href=#])').click(function(){
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();
