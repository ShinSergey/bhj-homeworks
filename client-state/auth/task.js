const inputLog = document.getElementsByName("login");
const inputPas = document.getElementsByName("password");
const button = document.getElementById("signin__btn");
const form = document.getElementById("signin__form");

button.onclick = () => {
    let xhr = new XMLHttpRequest;
    form.addEventListener("submit", (e) => {
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === xhr.DONE) {
                console.log(xhr.status)
            }
        })
        xhr.open("POST", `https://netology-slow-rest.herokuapp.com/auth.php`);
        let formData = new FormData(form);
        xhr.send(formData);
        
    })
}