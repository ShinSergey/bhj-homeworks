const items = document.getElementById("items");
const loader = document.querySelector(".loader");
const getCurrency = new XMLHttpRequest();
getCurrency.open("GET", "https://netology-slow-rest.herokuapp.com");
let currency;
let get = localStorage.getItem("currency");
let parsed = JSON.parse(get);
function getHTML(arr) {
  arr.forEach((element) => {
    items.insertAdjacentHTML("afterBegin",
      `<div class="item">
        <div class="item__code">
        ${element[0]}
        </div>
        <div class="item__value">
        ${element[1]}
        </div>
        <div class="item__currency">
          руб.
        </div>
      </div>`);
  })
}
if (parsed) {
  getHTML(parsed)
  loader.classList.remove("loader_active");
}

getCurrency.addEventListener("readystatechange", () => {
  if (getCurrency.readyState === getCurrency.DONE) {
    if(items.innerHTML !== "") {
      items.innerHTML = "";
    }
    let parsed = JSON.parse(getCurrency.responseText);
    let currencies = parsed.response.Valute;
    Object.entries(currencies).forEach(item => {
      items.insertAdjacentHTML("afterBegin",
        `<div class="item">
          <div class="item__code">
          ${item[0]}
          </div>
          <div class="item__value">
          ${item[1].Value}
          </div>
          <div class="item__currency">
            руб.
          </div>
        </div>`);
      loader.classList.remove("loader_active");
    })
    let arr = Array.from(items.getElementsByClassName("item"));
    currency = [];
    arr.forEach(element => {
      currency.push([element.firstChild.nextSibling.textContent, element.firstChild.nextSibling.nextSibling.nextSibling.textContent]);
    });
    localStorage.setItem("currency", JSON.stringify(currency));
  }
})

getCurrency.send();