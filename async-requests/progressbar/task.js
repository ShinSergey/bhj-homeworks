const progress = document.getElementById("progress");

document.forms.form.addEventListener("submit", (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === xhr.OPENED) {
            progress.value = 0.25;
        } else if (xhr.readyState === xhr.HEADERS_RECEIVED) {
            progress.value = 0.50;
        } else if (xhr.readyState === xhr.LOADING) {
            progress.value = 0.75;
        } else if (xhr.readyState === xhr.DONE) {
            progress.value = 1.00;
            alert("Загрузка завершина");
            progress.value = 0.00;
        }
    })

    xhr.open("POST", `https://netology-slow-rest.herokuapp.com/upload.php`);

    const formData = new FormData(document.forms.form);

    xhr.send(formData);
})