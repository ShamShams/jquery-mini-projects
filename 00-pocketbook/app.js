$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var firstName = $("#first").val();
    if(firstName === "") {
      $(".first-name-error").html("Please enter your first name.")
    };
    var lastName = $("#last").val();
    if(lastName === "") {
      $(".last-name-error").html("Please enter your last name.")
    };
    var eMail = $("#email").val();
    if(eMail === "") {
      $(".email-error").html("Please enter your email.");
    }
    var passwordVal = $("#password").val();
    if(passwordVal === "") {
      $(".password-error").html("Please enter a password.")
    } else if(passwordVal.length < 8) {
      $(".password-error").html("The password must contain at least 8 characters.")
    }
  })
});
