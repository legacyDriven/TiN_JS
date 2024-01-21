    // Technologie Internetu –JavaScript (max 10 pkt)


    // Zaimplementuj poniższe wymagania. Twoja implementacja powinna zawierać wskazane funkcje i kod prezentujący ich działanie.
    // Użyj własnej inwencji do uzupełnienia „brakujących” elementów wymagań.

    // Funkcja prezentująca działanie pętli for (1 pkt)
    function showForLoop() {
        for (let i = 0; i < 5; i++) {
            console.log(i);
        }
    }

    // Funkcja prezentująca działanie pętli while (1 pkt)
    function showWhileLoop() {
        let i = 0;
        while (i < 5) {
            console.log(i);
            i++;
        }
    }

    // Funkcja prezentująca działanie pętli for ... in (1 pkt)
    function showForInLoop() {
        const object = { a: 1, b: 2, c: 3 };
        for (const key in object) {
            console.log(`${key}: ${object[key]}`);
        }
    }

    // Funkcja prezentująca działanie pętli for ... of (1 pkt)
    function showForOfLoop() {
        const array = [1, 2, 3, 4, 5];
        for (const value of array) {
            console.log(value);
        }
    }

    // Funkcja prezentująca działanie instrukcji if (1 pkt)
    function showIfStatement(value) {
        if (value > 0) {
            console.log('Dodatnie');
        } else if (value < 0) {
            console.log('Ujemne');
        } else {
            console.log('Zero');
        }
    }

    // Funkcja przyjmująca dwa (lub więcej) parametry, sprawdzająca czy są one liczbami
    // lub mogą być skonwertowane na wartości liczbowe i wykonująca na nich obliczenia lub (jeśli to niemożliwe) zwracająca błąd (1 pkt)
    function calculateNumbers(a, b) {
        if (!isNaN(a) && !isNaN(b)) {
            return Number(a) + Number(b);
        } else {
            throw new Error('Invalid input');
        }
    }

    // Funkcja przyjmująca zmienną liczbę parametrów i robiącą z nimi coś (1 pkt)
    function variableParamsFunction(...args) {
        return args.reduce((acc, curr) => acc + curr, 0);
    }

    // Funkcja przyjmująca jako jeden z parametrów funkcję (i wykorzystująca ją w jakiś sposób)
    // + 2 przykładowe funkcje, które można wykorzystać jako jej parametry (1 pkt)
    function executeFunction(fn) {
        return fn();
    }

    function hello() {
        return 'Hello World!';
    }

    function add(a, b) {
        return a + b;
    }

    // Przykład wykorzystania funkcji konstruktora do tworzenia obiektów –
    // obiekty powinny mieć przynajmniej 3 pola różnych typów i 1 metodę robiącą coś (1 pkt)
    function Person(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;

        this.greet = function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        };
    }

    // Przykład wykorzystania klas do tworzenia obiektów – obiekty powinny mieć przynajmniej 3 pola różnych typów,
    // konstruktor i 1 metodę robiącą coś (1 pkt)
    class Person {
        constructor(name, age, isStudent) {
            this.name = name;
            this.age = age;
            this.isStudent = isStudent;
        }

        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }
