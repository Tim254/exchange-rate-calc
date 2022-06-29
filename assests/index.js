const currency_Elone = document.getElementById('currency-one');
const amount_Elone = document.getElementById('amount-one');
const currency_Eltwo = document.getElementById('currency-two');
const amount_Eltwo = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const exchange = document.getElementById('exchange')


function calculate(){
   const currency_one = currency_Elone.value;
   const currency_two = currency_Eltwo.value;

   fetch(`https://v6.exchangerate-api.com/v6/81f2290e8470eed9351a74e3/latest/${currency_one}`)
   .then(resp => resp.json())
   .then(data => {
    // console.log(data)
    const rates = data.conversion_rates[currency_two]
    
    rateEl.innerText = `1 ${currency_one} = ${rates} ${currency_two}`

    amount_Eltwo.value = (amount_Elone.value * rates).toFixed(2)
   })


}
// Event listeners
currency_Elone.addEventListener('change', calculate)
amount_Elone.addEventListener('input', calculate)
currency_Eltwo.addEventListener('change', calculate)
amount_Eltwo.addEventListener('change', calculate)
exchange.addEventListener('click', () => {
    const temp = currency_Elone.value;
    currency_Elone.value = currency_Eltwo.value;
    currency_Eltwo.value = temp;
})



calculate();