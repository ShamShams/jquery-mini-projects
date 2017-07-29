$(document).ready(function() {
  $(".btn").click(function(event) {
    event.preventDefault();
    var text = $("#comment").val();
    $("ul").prepend("<li>" + text + "</li>")
  })
});

//ou $("form").submit()
