const items = document.getElementById("items");
const loader = document.querySelector(".loader");
// localStorage.clear();
const getCurrency = new XMLHttpRequest();
getCurrency.open("GET", "https://netology-slow-rest.herokuapp.com");
let currency;
let getter = localStorage.getItem("currency");
let parsed = JSON.parse(getter);
if (parsed) {
    parsed.forEach((element) => {
        items.insertAdjacentHTML("afterBegin", element);
    })
}

getCurrency.addEventListener("readystatechange", () => {
    if (getCurrency.readyState === getCurrency.DONE) {
        let parsed = JSON.parse(getCurrency.responseText);
        console.log(parsed);
        let currencies = parsed.response.Valute;
        Object.entries(currencies).forEach(item => {
            items.insertAdjacentHTML("afterbegin",
        `<div class="item">
          <div class="item__code">
          </div>

          <div class="item__value">
            
          </div>
          <div class="item__currency">
            руб.
          </div>
        </div>`);
        items.firstChild.firstChild.nextSibling.textContent = item[0];
        items.firstChild.firstChild.nextSibling.nextSibling.nextSibling.textContent = item[1].Value;
        loader.classList.remove("loader_active");
          }) 
          let arr = Array.from(items.getElementsByClassName("item"));
          currency = [];
          localStorage.clear();
          arr.forEach(element => {
            arr.push(element.outerHTML);
              localStorage.setItem("currency", JSON.stringify(arr));
          });
    }
})

getCurrency.send();