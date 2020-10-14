const ofAgeForm = $("#of-age-form");
const signUpForm = $("#sign-up-form");

$("#confirmation").on("click", function () {  
    $(ofAgeForm).addClass("hide");
    $(signUpForm).removeClass("hide");
})

$(document).ready(() => {
    // Getting references to our form and input
    // const signUpForm = $("form.signup");
    const emailInput = $("input#email");
    const passwordInput = $("input#password-input");
    const nameInput = $("input#name");
    const userNameInput = $("input#user-name");
    const signUp = $("#sign-up")

    // When the signup button is clicked, we validate the email and password are not blank
    signUp.on("click", event => {
      event.preventDefault();
      const userData = {
        email: emailInput.val(),
        password: passwordInput.val(),
        name: nameInput.val(),
        userName: userNameInput.val(),
     };
  
      console.log(userData.name);
      console.log(userData.userName);
      console.log(userData.email);

      if (!userData.email || !userData.password || !userData.name || !userData.userName) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password, userData.name, userData.userName);
      emailInput.val("");
      passwordInput.val("");
      nameInput.val("");
      userNameInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password, name, userName, age) {
      $.post("/api/signup", {
        email: email,
        password: password,
        name: name,
        userName: userName,
        age: age
      })
        .then(() => {
          window.location.replace("/home");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  
  