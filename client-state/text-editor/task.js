const textarea = document.getElementById("editor");
let text;
const storedText = localStorage.getItem("text");
if(storedText) {
    textarea.value = JSON.parse(storedText);
}

textarea.addEventListener("keydown", () => {
    text = textarea.value;
    console.log(text);
    localStorage.setItem("text", JSON.stringify(text));
}); 
