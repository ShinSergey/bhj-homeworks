const progress = document.getElementById("progress");

document.forms.form.addEventListener("submit", (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function () {
        progress.value += 0.20;
    }
    xhr.upload.onload = function () {
        progress.value = 1;
        alert("Загрузка завершина");
        progress.value = 0.00;
    }

    xhr.open("POST", `https://netology-slow-rest.herokuapp.com/upload.php`);

    const formData = new FormData(document.forms.form);

    xhr.send(formData);
})