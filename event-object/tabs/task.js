let tabs = document.getElementsByClassName("tab");
tabs = Array.from(tabs);
let tabContents = document.getElementsByClassName("tab__content");
tabContents = Array.from(tabContents);

let current = tabs.findIndex(function (element) {
    if (element.className === "tab tab_active") {
        return element;
    }
});

function getContent(tab) {
    tabs[current].classList.remove("tab_active");
    tabContents[current].classList.remove("tab__content_active");
    let newCurrent = tab;
    tabs[newCurrent].classList.add("tab_active");
    tabContents[newCurrent].classList.add("tab__content_active");
    current = newCurrent;
}

onload = function () {
    for (let t = 0; t < tabs.length; t++) {
        let active = tabs[t];
        active.onclick = () => {
            let index = tabs.indexOf(active)
            getContent(index);
        }
    }
}
