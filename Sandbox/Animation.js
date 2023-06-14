/* Don't forget to add jQuery to your index */
$(document).ready(function () {
  
  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
    
    /* Check the location of each desired element */
    $('.reveal').each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      /* If the object is completely visible in the window, fade it in */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ 'opacity': '1' }, 1500);
        /* 1500 is the duration of fade effect */
      }
    });
  });
});