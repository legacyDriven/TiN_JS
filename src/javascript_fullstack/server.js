const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

// Middleware do obsługi JSON i statycznych plików
app.use(express.json());
app.use(express.static('public'));

// Przykładowy endpoint do walidacji i przetwarzania danych formularza
app.post('/process-form', (req, res) => {
    const data = req.body;
    // Tutaj dodaj logikę walidacji i przetwarzania...
    // Na razie po prostu zwróć otrzymane dane
    res.json({ status: 'success', receivedData: data });
});

// Endpoint do udostępniania kursu BTC-PLN
app.get('/api/btc-pln', async (req, res) => {
    try {
        const response = await fetch('https://api.zondacrypto.exchange/rest/trading/ticker/BTC-PLN', {
            headers: { 'accept': 'application/json' }
        });
        const data = await response.json();
        if (data.status === "Ok") {
            res.json({ rate: data.ticker.rate });
        } else {
            res.status(500).send("Nie udało się pobrać danych z API Zonda.");
        }
    } catch (error) {
        console.error('Błąd przy odpytywaniu API Zonda:', error);
        res.status(500).send("Błąd połączenia z API Zonda.");
    }
});

app.listen(port, () => {
    console.log(`Serwer słucha na porcie ${port}`);
});
