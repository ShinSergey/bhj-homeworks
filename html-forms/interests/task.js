const checkboxes = document.getElementsByClassName("interest__check");

function checker(e) {
    if (e.closest("label").nextElementSibling) {
        let childboxes = e.closest("label").nextElementSibling.children;
        let parentbox;
        if (e.closest("ul").previousElementSibling.children) {
            parentbox = e.closest("ul").previousElementSibling.children;
        }
        for (let c = 0; c < childboxes.length; c++) {
            let childbox = childboxes[c].querySelector(".interest__check");
            childbox.checked = !childbox.checked;
            parentbox[0].checked = childbox.checked;
            checker(childbox);
        }
    }
}

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", () => {
        let checkbox = checkboxes[i]
        checker(checkbox);
    })
}