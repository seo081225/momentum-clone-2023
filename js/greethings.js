const loginSplash = document.querySelector("#login-splash");
const loginForm = loginSplash.querySelector("#login-form");
const loginInput = loginSplash.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginSplash.style.display = "none";
    paintGreetings();
}

function paintGreetings() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    const greetingText = `${savedUsername}, 펭-하!`;
    document.title = greetingText + " (*ˊᵕˋ*)ﾉ";
    greeting.innerHTML = greetingText;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    loginSplash.style.display = "none";
    paintGreetings(savedUsername);
}
