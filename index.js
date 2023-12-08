const api = "https://api.exchangerate-api.com/v4/latest/USD"

let search = document.querySelector(".searchBox");
let convertBtn = document.querySelector(".convertBtn")
let fromCurrency = document.querySelector(".from")
let toCurrency = document.querySelector(".to")
let finalAmount = document.querySelector(".finalAmount")
let finalValue = document.querySelector(".finalValue")
let resultfrom

fetch(api)
  .then((res) => {
    console.log(res)
  })

// fromCurrency?.addEventListener("change", (event) => {
//   resultfrom = `${event.target.value}`
// })