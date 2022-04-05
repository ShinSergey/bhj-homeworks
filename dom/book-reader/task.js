const sizes = document.getElementsByClassName("font-size");
let activeSizeClass = ".font-size_active";
let sizeAtr = "data-size";

const tColors = document.getElementsByClassName("text-color");
let activeTColorClass = ".tColor_active";
let textColorAtr = "data-text-color";

const bgColors = document.getElementsByClassName("bg-color");
let activeBgColorClass = ".bgColor_active";
let bgColorAtr = "data-bg-color";

const book = document.querySelector(".book");


function Changer(types, activeClass, attribute) {
    let active = document.querySelector(activeClass);
    for (let i = 0; i < types.length; i++) {
        let current = types[i];
        current.onclick = () => {
            active.classList.remove(activeClass);
            active = current;
            active.classList.add(activeClass);
            let atr = active.getAttribute(attribute);
            if (attribute === "data-size") {
                if (atr === "big") {
                    if (book.classList.contains("book_fs-small")) {
                        book.classList.remove("book_fs-small");
                    }
                    book.classList.add("book_fs-big");
                } else if (atr === "small") {
                    if (book.classList.contains("book_fs-big")) {
                        book.classList.remove("book_fs-big");
                    }
                    book.classList.add("book_fs-small");
                }
            }

            if (attribute === "data-text-color") {
                if (atr === "black") {
                    if (book.classList.contains("book_color-gray" || "book_color-whitesmoke")) {
                        book.classList.remove("book_color-gray");
                        book.classList.remove("book_color-whitesmoke");
                    }
                    book.classList.add("book_color-black");
                } else if (atr === "gray") {
                    if (book.classList.contains("book_color-whitesmoke" || "book_color-black")) {
                        book.classList.remove("book_color-whitesmoke");
                        book.classList.remove("book_color-black");
                    }
                    book.classList.add("book_color-gray");
                } else if (atr === "whitesmoke") {
                    if (book.classList.contains("book_color-gray" || "book_color-black")) {
                        book.classList.remove("book_color-gray");
                        book.classList.remove("book_color-black");
                    }
                    book.classList.add("book_color-whitesmoke");
                }
            }

            if (attribute === "data-bg-color") {
                if (atr === "black") {
                    if (book.classList.contains("book_bg-gray" || "book_bg-white")) {
                        book.classList.remove("book_bg-gray" && "book_bg-white");
                    }
                    book.classList.add("book_bg-black");
                } else if (atr === "gray") {
                    if (book.classList.contains("book_bg-white" || "book_bg-black")) {
                        book.classList.remove("book_bg-white" && "book_bg-black");
                    }
                    book.classList.add("book_bg-gray");
                } else if (atr === "white") {
                    if (book.classList.contains("book_bg-gray" || "book_bg-black")) {
                        book.classList.remove("book_bg-gray" && "book_bg-black");
                    }
                    book.classList.add("book_bg-white");
                }
            }
            return false
        }
    }
}

Changer(sizes, activeSizeClass, sizeAtr);

Changer(tColors, activeTColorClass, textColorAtr);

Changer(bgColors, activeBgColorClass, bgColorAtr);