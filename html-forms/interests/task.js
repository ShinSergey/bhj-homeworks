const checkboxes = document.getElementsByClassName("interest__check");

function checker(e) {
    if (e.closest("label").nextElementSibling) {
        let childboxes = e.closest("label").nextElementSibling.children;
        let boxes = Array.from(childboxes);
        boxes.forEach(element => {
            let childbox = element.querySelector(".interest__check");
            childbox.checked = !childbox.checked;
            checker(childbox);
        });
    }
}

function checkerUp(e) {
    if (e.closest("ul").previousElementSibling.children) {
        let parentbox;
        parentbox = e.closest("ul").previousElementSibling.children;
        parentbox[0].checked = !parentbox[0].checked;
        checkerUp(parentbox[0]);
    }
}

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", () => {
        let checkbox = checkboxes[i];
        checker(checkbox);
        checkerUp(checkbox);
    })
}