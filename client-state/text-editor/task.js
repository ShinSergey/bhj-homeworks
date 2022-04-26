const clear = document.getElementById("clear");
const textarea = document.getElementById("editor");
let text;
const storedText = localStorage.getItem("text");
textarea.value = storedText;

textarea.addEventListener("keydown", () => {
    text = textarea.value;
    localStorage.setItem("text", text);
});

clear.onclick = () => {
    textarea.value = "";
    localStorage.clear();
}
