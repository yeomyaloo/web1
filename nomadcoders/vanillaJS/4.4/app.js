//const loginForm = document.querySelector("#login-form");
//const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//그다지 중요하지 않은 정보를 담는 것이기 때문에 대문자로 작성한다. 
const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //greeting.innerText = "Hello " + username; 
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


//form의 기본 submit
loginForm.addEventListener("submit",onLoginSubmit);

