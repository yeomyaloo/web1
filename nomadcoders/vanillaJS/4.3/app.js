//const loginForm = document.querySelector("#login-form");
//const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
}

function handleLinkClick(event){
    event.preventDefault();
    alert("Clicked!")
}


//form의 기본 submit
loginForm.addEventListener("submit",onLoginSubmit);

link.addEventListener("click",handleLinkClick);

handleLinkClick
//