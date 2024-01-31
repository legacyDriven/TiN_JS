const express = require('express');
const app = express();
const crypto = require('crypto');
const port = 3000;

// Ustawienie folderu public jako miejsca na statyczne pliki
app.use(express.static('public'));
// Ustawienie silnika szablonów na EJS
app.use(express.urlencoded({ extended: true }));


app.post('/submit-form', (req, res) => {
    const data = req.body;
    // Tu można dodać logikę przetwarzania danych
    res.send('Otrzymane dane: ' + JSON.stringify(data));
});

app.post('/calculate-bmi', (req, res) => {
    const { name, weight, height } = req.body;
    const weightNum = parseFloat(weight);
    const heightMeters = parseFloat(height) / 100;

    // Prosta walidacja
    if (!name || weightNum <= 0 || heightMeters <= 0) {
        return res.send('Podano nieprawidłowe dane.');
    }

    const bmi = (weightNum / (heightMeters * heightMeters)).toFixed(2);

    res.send(`Witaj ${name}, Twoje BMI wynosi: ${bmi}`);
});

app.post('/register', (req, res) => {
    const { email, firstName, lastName, pesel } = req.body;

    // Walidacja e-maila
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).send('Podano nieprawidłowy adres e-mail.');
    }

    // Walidacja imienia i nazwiska
    if (firstName.length < 3 || firstName.length > 20 || lastName.length < 3 || lastName.length > 20) {
        return res.status(400).send('Imię lub nazwisko ma nieprawidłową długość.');
    }

    // Walidacja PESEL
    const peselRegex = /^\d{11}$/;
    if (!peselRegex.test(pesel)) {
        return res.status(400).send('Podano nieprawidłowy PESEL.');
    }

    // Jeśli wszystkie dane są prawidłowe, hashowanie
    const hash = crypto.createHash('sha256').update(JSON.stringify({ email, firstName, lastName, pesel })).digest('hex');

    res.send(`Hash SHA256 danych z formularza to: ${hash}`);
});


app.listen(port, () => {
    console.log(`Serwer uruchomiony na porcie ${port}`);
});