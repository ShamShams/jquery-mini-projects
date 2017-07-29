$(document).ready(function() {
  $(".day").click(function() {
    // $("span").toggleClass("glyphicon glyphicon-minus");
    $(this).next(".hourly").toggle("slow");
  });
});
