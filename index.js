const api = "https://api.exchangerate-api.com/v4/latest/USD"

let search = document.querySelector(".searchBox");
let convertBtn = document.querySelector(".convertBtn")
let fromCurrency = document.querySelector("#from")
let toCurrency = document.querySelector("#to")
let finalAmount = document.getElementById("finalAmount")
let finalValue = document.querySelector(".finalValue")
let resultFrom
let resultTo
let searchValue

fromCurrency.addEventListener("change", (event) => {
  resultFrom = `${event.target.value}`
})

toCurrency.addEventListener("change", (event) => {
  resultTo = `${event.target.value}`
})

const updateValue = (e) => {
  searchValue = e.target.value
}

search.addEventListener ('input', updateValue)

const getResult = () => {
  fetch(`${api}`)
    .then(res => {
      return res.json()
    })
    .then(displayResults)
  console.log(res)
  console.log(displayResults)
}

convertBtn.addEventListener('click',  getResult)

const displayResults = (currency) => {
  let fromRate = currency.rates[resultFrom]
  let toRate = currency.rates[resultTo]

  finalValue.innerHTML = ((toRate/fromRate) * searchValue).toFixed(2)
  finalAmount.style.display = "block"
}