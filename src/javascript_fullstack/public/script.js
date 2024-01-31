document.getElementById('dataForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/process-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        document.getElementById('result').textContent = JSON.stringify(result);
    } catch (error) {
        console.error('Błąd:', error);
    }
});

async function fetchBTCTicker() {
    try {
        const response = await fetch('/api/btc-pln');
        const data = await response.json();
        document.getElementById('btcRate').textContent = `Kurs BTC-PLN: ${data.rate} PLN`;
    } catch (error) {
        console.error('Błąd przy pobieraniu kursu BTC-PLN:', error);
        document.getElementById('btcRate').textContent = 'Błąd podczas ładowania kursu';
    }
}

fetchBTCTicker();
setInterval(fetchBTCTicker, 10000); // Odpytywanie co 10 sekund

