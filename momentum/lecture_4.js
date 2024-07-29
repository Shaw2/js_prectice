const loginForm = document.getElementById("login-form");
// const loginForm = document.querySelector("#login-form")

const loginInput = loginForm.querySelector("Input");
const loginButton = loginForm.querySelector("button");
// == const loginInput = document.querySelector("#login-form input");
// == const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.dir(loginInput);
    console.log(loginInput.value);
    console.log("Button is clicked!!");
};

loginButton.addEventListener("click", onLoginBtnClick);