document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Walidacja
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;

    if (!name) {
        alert('Please enter your name.');
        return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    } else if (age < 18) {
        alert('You must be at least 18 years old.');
        return;
    }

    // Modyfikacja zawartości strony
    document.getElementById('formOutput').innerHTML =
        '<p>Name: ' + name + '</p>' +
        '<p>Email: ' + email + '</p>' +
        '<p>Age: ' + age + '</p>';
});
