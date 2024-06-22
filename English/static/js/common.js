$(function() {
  $('.allTopConMenu ul li').hover(function() {
    event.stopPropagation();
    $("#header").addClass("bjHeise")
    $(".allTopConMenuPos").slideUp();
    $(this).find(".allTopConMenuPos").slideDown();
  }, function() {
    event.stopPropagation();
    $(".allTopConMenuPos").slideUp();
  })
  $(window).scroll(function() {
    if ($(document).scrollTop() <= 0) {
      $("#header").removeClass("bjHeise")
    } else {
      $("#header").addClass("bjHeise")
    }
  });
})
