const getCurrency = new XMLHttpRequest();
getCurrency.open("GET", "https://netology-slow-rest.herokuapp.com");

getCurrency.addEventListener("readystatechange", () => {
    if (getCurrency.readyState === getCurrency.DONE) {
        let parsed = JSON.parse(getCurrency.responseText);
        console.log(parsed);
        let currencies = parsed.response.Valute;
        parsed.response.Valute.forEach(element => {
            
        })
    }
})

getCurrency.send();