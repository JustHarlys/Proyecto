function getExchangeRate() {
    let exchangeRate = 0
    const currencyValues = [63.25, 58.99]
    const currencyCode = document.getElementById('currency-code').value;
    if (currencyCode.toLowerCase() === 'eur') {
        exchangeRate = currencyValues[0]; 
        document.getElementById('exchange-rate-result').innerText = `La tasa de cambio para ${currencyCode} es ${exchangeRate}`;
        document.getElementById('meaning').innerText = `${exchangeRate} DOP es igual a 1 EUR`;
    } else if (currencyCode.toLowerCase() === 'usd') {
        exchangeRate = currencyValues[1];
        document.getElementById('exchange-rate-result').innerText = `La tasa de cambio para ${currencyCode} es ${exchangeRate}`;
        document.getElementById('meaning').innerText = `${exchangeRate} DOP es igual a 1 USD`;
    } else {
        document.getElementById('exchange-rate-result').innerText = `Inserte un código válido por favor`;
        document.getElementById('meaning').innerText = ``;

    }
}



function getInflationIndex() {
    const period = document.getElementById('period').value;
    const inflationIndex = 3.5; 
    document.getElementById('inflation-index-result').innerText = `El índice de inflación para el período ${period} es ${inflationIndex}%`;
}



function getFinancialHealth() {
    const financialHealthRNC = document.getElementById('financialHealthID')
    const isHealthy = 'Yes'
    const comment = "Comentario salud financiera placeholder"
    const totalAmount = 5000
    
    document.getElementById('financial-health-result').innerText = `Es saludable: ${isHealthy}\n Comentario: ${comment}\n Monto Total: ${totalAmount}`
    
}

function getCreditHistory() {
    const creditHistoryRNC = document.getElementById('creditHistoryID')
    const receiverRNC = 123456789
    const debtConcept = "Concepto deuda placeholder"
    const debtDate = "01/09/2001"
    const totalAmount = 1999.99

    document.getElementById('credit-history-result').innerText = `RNC Adeudado: ${receiverRNC}\n Concepto Deuda: ${debtConcept}\n Fecha: ${debtDate}\n Monto Total: ${totalAmount}`
}
