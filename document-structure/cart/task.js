const pluses = document.getElementsByClassName("product__quantity-control_inc");
const minuses = document.getElementsByClassName("product__quantity-control_dec");
const quantitis = document.getElementsByClassName("product__quantity-value");
const buttons = document.getElementsByClassName("product__add");
const cart = document.querySelector(".cart__products");
const cartTitle = document.querySelector(".cart");
cartTitle.hidden = true;
let deleteButtons;

function changer(objects, func) {
    for (let i = 0; i < objects.length; i++) {
        objects[i].onclick = () => {
            func(objects[i])
        }
    }
}

function inc(element) {
    element.previousSibling.previousSibling.textContent++;
}

function dec(element) {
    element.nextSibling.nextSibling.textContent--;
    if (element.nextSibling.nextSibling.textContent < 1) {
        element.nextSibling.nextSibling.textContent = 1;
    }
}

function add(element) {
    let img = element.closest(".product__controls").previousSibling.previousSibling;
    let quantity = element.previousSibling.previousSibling.querySelector(".product__quantity-value").textContent;
    element.previousSibling.previousSibling.querySelector(".product__quantity-value").textContent = 1;
    let addedItems = Array.from(cart.getElementsByClassName("cart__product-image"));
    let addedItem = addedItems.find(function (element, index, array) {
            return element.src === img.src;
    })
    if (addedItem) {
        let number1 = Number(addedItem.nextSibling.nextSibling.textContent);
        let number2 = Number(quantity);
        addedItem.nextSibling.nextSibling.textContent = number1 + number2;
    } else {
        cart.insertAdjacentHTML("beforeend", `
            <div class="cart__product" data-id="">
            <img class="cart__product-image" src="">
            <div class="cart__product-count"></div>
            </div>`);
        let newIn = cart.lastChild;
        newIn.setAttribute("data-id", cart.getElementsByClassName("cart__product").length);
        newIn.firstChild.nextSibling.src = img.currentSrc;
        newIn.lastChild.previousSibling.textContent = quantity;
        let deleteButton = newIn.querySelector(".cart__product-count");
        deleteButton.onclick = () => {
            deleteButton.textContent--;
            if (deleteButton.textContent < 1) {
                deleteButton.parentElement.remove();
            }
        }
    }
    cartTitle.hidden = !cart.firstChild;
}


changer(pluses, inc);

changer(minuses, dec);

changer(buttons, add);


