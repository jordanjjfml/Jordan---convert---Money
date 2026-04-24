const convertButton = document.getElementById('convert-button');
const currencyToConvert = document.getElementById('currency-to-convert');

function amount() {
  const amountInput = document.getElementById('amount');
  const fromCurrency = document.getElementById('from-currency').value;
  const toCurrency = document.getElementById('to-currency').value;
  const amount = Number(amountInput.value);

  if (!amount || amount <= 0) {
    alert('Digite um valor maior que zero.');
    return;
  }

    // Taxas fixas de exemplo, você pode substituir por API real
    const rates = {
        BRL: 1,
        USD: 5.31,
        EUR: 5.6,
        KWD: 17.42
    };

    if (!rates[fromCurrency] || !rates[toCurrency]) {
        alert('Erro: moeda desconhecida.');
        return;
    }

    const valueInBRL = amount * rates[fromCurrency];
    const convertedAmount = valueInBRL / rates[toCurrency];

    const format = (valor, currency) => valor.toLocaleString('pt-BR', { style: 'currency', currency });
    const convertedValue = document.querySelector('.currency-value');

    const fromCurrencyName = document.getElementById('from-currency').selectedOptions[0].text;
    const toCurrencyName = document.getElementById('to-currency').selectedOptions[0].text;
    const currencyBoxes = document.querySelectorAll('.corrency-box');
    const currencyImages = {
        BRL: './assets/brasil 2.png',
        USD: './assets/Usa.png',
        EUR: './assets/Euro.png',
        KWD: './assets/Kuwait.webp'
    };

    if (currencyBoxes.length >= 2) {
        currencyBoxes[0].querySelector('p:nth-of-type(1)').innerText = fromCurrencyName;
        currencyBoxes[1].querySelector('p:nth-of-type(1)').innerText = toCurrencyName;

        const fromImg = currencyBoxes[0].querySelector('img');
        const toImg = currencyBoxes[1].querySelector('img');

        if (fromImg && currencyImages[fromCurrency]) {
            fromImg.src = currencyImages[fromCurrency];
        }
        if (toImg && currencyImages[toCurrency]) {
            toImg.src = currencyImages[toCurrency];
        }
    }

    currencyToConvert.innerText = format(amount, fromCurrency);
    if (convertedValue) {
        convertedValue.innerText = format(convertedAmount, toCurrency);
    }

    console.log(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
}

convertButton.addEventListener('click', amount); 