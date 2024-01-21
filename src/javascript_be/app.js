const express = require('express');
const app = express();
const path = require('path');

// Middleware do parsowania danych formularza
app.use(express.urlencoded({ extended: true }));

// Serwowanie statycznych zasobów
app.use(express.static(path.join(__dirname, 'public')));

// Start serwera
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});

// Obsługa endpointa do przyjmowania i walidacji danych formularza
app.post('/submit-form', (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email || age < 18) {
        res.send('Błąd walidacji');
    } else {
        res.send(`Otrzymane dane: ${name}, ${email}, ${age}`);
    }
});
