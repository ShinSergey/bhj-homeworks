const button = document.getElementById("signin__btn");
const exit = document.getElementById("unsignin__btn");
const signin = document.querySelector(".signin");
const form = document.getElementById("signin__form");
const welc = document.getElementById("welcome");
const login = document.getElementsByName("login");
const password = document.getElementsByName("password");

if (localStorage.getItem("active_user")) {
    autorisation()
    let activeUser = localStorage.getItem("active_user");
    document.getElementById("user_id").textContent = activeUser;
}

function autorisation() {
    signin.classList.toggle("signin_active");
    welc.classList.toggle("welcome_active");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === xhr.DONE) {
            let parsed = JSON.parse(xhr.responseText);
            if (parsed.success) {
                autorisation()
                localStorage.setItem("active_user", parsed.user_id);
            } else {
                alert("Неверный логин/пароль");
                login[0].value = "";
                password[0].value = "";
            }
        }
    })
    xhr.open("POST", `https://netology-slow-rest.herokuapp.com/auth.php`);
    let formData = new FormData(form);
    xhr.send(formData);
})

exit.onclick = () => {
    autorisation()
}