$(document).ready(function() {
  $(".bell").click(function() {
    $(".notification-menu").toggle();
  });
  $("button").click(function() {
    $(this).toggleClass("btn-like");
  });
})
