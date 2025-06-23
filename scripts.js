

const convertButton = document.querySelector(".button-convert")
const selectConverted = document.querySelector(".select-js-converted")
const selectCurrency = document.querySelector(".select-js")




function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-value").value
    const toConvertValue = document.querySelector(".value-to-convert") //valor a se converter(real)
    const valueCurencyConverted = document.querySelector(".value-converted")  //valor a ser convertido(outras moedas)



    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 5.4
    const realToday = 5


//Segundo INPUT
    if (selectConverted.value == "dolar") { //( .value ) pega só o valor dentro do input sem ele pega todos os valores
        valueCurencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (selectConverted.value == "euro") {  //( .value ) pega só o valor dentro do input sem ele pega todos os valores
        valueCurencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (selectConverted.value == "libra") {  //( .value ) pega só o valor dentro do input sem ele pega todos os valores
        valueCurencyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (selectConverted.value == "real") { //( .value ) pega só o valor dentro do input sem ele pega todos os valores
        valueCurencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToday)
    }


//Primeiro INPUT

if(selectCurrency.value == "real"){
 toConvertValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}
if(selectCurrency.value == "libra"){
     toConvertValue.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue)
}
if(selectCurrency.value == "euro"){
    toConvertValue.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue)
}
if(selectCurrency.value == "dolar"){
    
    toConvertValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue)
}
}

 

function currencySelector() {
    const inputName = document.getElementById("name-input")
    const inputImage = document.getElementById("img-input")

    if (selectCurrency.value == "real") {
        inputName.innerHTML = "Real Brasileiro"
        inputImage.src = "./assets/BRA.png"
    }

    if (selectCurrency.value == "dolar") {
        inputName.innerHTML = "Dólar Americano"
        inputImage.src = "./assets/EUA.png"
    }

    if (selectCurrency.value == "euro") {
        inputName.innerHTML = "Euro"
        inputImage.src = "./assets/Euro.png"
    }

    if (selectCurrency.value == "libra") {
        inputName.innerHTML = "Libra"
        inputImage.src = "./assets/LIB.png"
    }

    convertValues()
}



function currencyChange() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-img")

    if (selectConverted.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/EUA.png"
    }
    if (selectConverted.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if (selectConverted.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/LIB.png"
    }

    if (selectConverted.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/BRA.png"
    }

    convertValues()
}

    selectConverted.addEventListener("change", currencyChange)
    convertButton.addEventListener("click", convertValues)
    selectCurrency.addEventListener("change", currencySelector)