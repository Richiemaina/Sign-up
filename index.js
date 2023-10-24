const signupBtn = document.getElementById("signupBtn");
const signinBtn = document.getElementById("signinBtn");
const nameField = document.getElementById("nameField");
const formEl = document.getElementById("signup");
const title = document.getElementById("title");

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
  formEl.id = "login";
};
signupBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
  formEl.id = "signup";
};

//Form elementsconst  nameField = document.getElementById("nameField");
const emailEl = document.getElementById("Email");
const passwordEl = document.getElementById("Password");
const nameEl = document.getElementById("Name");
const continueBtn = document.getElementById("Continue");



//Error span elements
const nameError =  document.getElementById("nameError");
const emailError =  document.getElementById("emailError");
const passwordError =  document.getElementById("passwordError");



document.addEventListener("load", () => {
  function validateSignUpForm(name, email, password) {
    const errors = {};

    if (!name || name === null || name.length < 3 || typeof name !== "string") {
      errors.name = "Invalid user name";
    }

    if (!email || email === null) {
      errors.email = "Your email is required";
    } else if (email && typeof email === "string") {
      if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        errors.email = "Incorrect email format";
      }
    } else {
      errors.email = "Invalid email";
    }

    if (!password || password === null) {
      errors.password = "Your password is required";
    } else if (password && typeof password === "string") {
      if (!password.match()) {
        errors.password =
          "password be at least 8 characters,must have a character,a number and a symbol";
      }
    }
  }

  function validateLogin(email, password) {
    const errors = {};

    if (!email || email === null) {
      errors.email = "Your email is required";
    } else if (email && typeof email === "string") {
      if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        errors.email = "Incorrect email format";
      }
    } else {
      errors.email = "Invalid email";
    }

    if (!password || password === null) {
      errors.password = "Your password is required";
    } else if (password && typeof password === "string") {
      if (!password.match()) {
        errors.password =
          "password be at least 8 characters,must have a character,a number and a symbol";
      }
    }

    return errors;
  }

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Submitting");
    const email = emailEl.value;
    const password = passwordEl.value;
    const name = nameEl.value;

    if (formEl.id === "signup") {
      //handle user signup validation
      const error = validateSignUpForm(name,email,password)
      alert("Signup validation");
      console.log("error");
      if(error.name){
        nameError.innerHTML = error.name
      }
      if(error.email){
        emailError.innerHTML = error.email
      }
      if(error.password){
        passwordError.innerHTML = error.password
      }
    }


    if (formEl.id === "login") {
      //handle login validation
      const error = validateLogin(email,password)
      if(error.email){
        emailError.innerHTML = error.email
      }
      if(error.password){
        passwordError.innerHTML = error.password
      }
    }
  });
});
