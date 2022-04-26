const button = document.getElementById("signin__btn");
const exit = document.getElementById("unsignin__btn");
const signin = document.querySelector(".signin");
const form = document.getElementById("signin__form");
const welc = document.getElementById("welcome");
const login = document.getElementsByName("login");
const password = document.getElementsByName("password");
let activeUser = localStorage.getItem("active_user");

if (activeUser) {
    autorisation()
    document.getElementById("user_id").textContent = activeUser;
}

function autorisation() {
    signin.classList.toggle("signin_active");
    welc.classList.toggle("welcome_active");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.response.success) {
                autorisation()
                localStorage.setItem("active_user", xhr.response.user_id);
                activeUser = localStorage.getItem("active_user");
                document.getElementById("user_id").textContent = activeUser;
            } else {
                alert("Неверный логин/пароль");
                form.reset();
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