"use strict"

    /*const bookings = [];
    
    const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
        // numPassengers = numPassengers || 1;
        // price = price || 199;
    
        const booking = {
            flightNum,
            numPassengers,
            price
        }
        console.log(booking);
        bookings.push(booking);
    }
    createBooking("LH123");
    createBooking("LH123", 2, 800);
    createBooking("LH123", 3);
    createBooking("LH123", 5);
    
    createBooking("Lh123", undefined, 1000);*/

    /*const flight = "LH234";
    const jonas = {
        name: "Jonas Schmedtmann",
        passport: 24739479284
    }
    
    const checkIn = function (flightNum, passenger) {
        flightNum = "LH999";
        passenger.name = "Mr. " + passenger.name;
    
        if (passenger.passport === 24739479284) {
            alert("checked in")
        } else {
            alert("Wrong passport!")
        }
    }
    // checkIn(flight, jonas);
    // console.log(flight);
    // console.log(jonas);
    
    // is the same as doing...
    // const flightNum = flight;
    // const passenger = jonas;
    
    const newPassport = function (person) {
        person.passport = Math.trunc(Math.random() * 100000000);
    }
    newPassport(jonas);
    checkIn(flight, jonas);*/

    /*const oneWord = function(str){
        return str.replace(/ /g, "").toLowerCase();
    };
    const upperFirstWord = function(str){
        const[first, ...others] = str.split(" ");
        return [first.toUpperCase(), ...others].join(" ");
    };
    
    // Higher-order function
    const transformer = function (str, fn){
        console.log(`Original string: ${str}`);
        console.log(`Transformed string: ${fn(str)}`);
        console.log(`Transformed by:${fn.name}`)
    }
    transformer("Javascript is the best!", upperFirstWord);
    transformer("Javascript is the best!",oneWord);
    
    const high5 = function(){
        console.log("👋");
    }
    document.body.addEventListener("click", high5);
    ["Jonaas", "Martha", "Adam"].forEach(high5);*/

    /*const greet = function(greeting){
        return function(name){
            console.log(`${greeting} ${name}`)
        }
    }
    const greeterHey = greet("Hey");
    greeterHey("Jonas");
    greeterHey("Steven");
    
    greet("Hello")("Jonas");
    
    const greetArr = greeting => name => console.log(`${greeting} ${name}`);
    greetArr("Hi")("Jonas");*/

    /*const lufthansa = {
        airline: "Lufthansa",
        iataCode: "LH",
        bookings: [],
        // book: function()
        book(flightNum, name) {
            console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
            this.bookings.push({ flight: `${this.iataCode}${flightNum}, name` });
        },
    };
    lufthansa.book(239, "Jonas Schmedtmann");
    lufthansa.book(635, "John Smith");
    console.log(lufthansa);
    
    const eurowings = {
        airline: "Eurowings",
        iataCode: "EW",
        bookings: []
    };
    
    const book = lufthansa.book;
    // book(23, "Sarah williams")//does not work
    
    // call method
    book.call(eurowings, 23, "Sarah Williams");
    console.log(eurowings);
    book.call(lufthansa, 239, "Mary Cooper");
    console.log(lufthansa);
    
    const swiss = {
        airline: "Swiss Air Lines",
        iataCode: "LX",
        bookings: []
    }
    book.call(swiss, 583, "Mary Cooper");
    console.log(swiss);
    
    // Apply method
    const flightData = [583, "George Cooper"];
    book.apply(swiss, flightData)
    console.log();
    
    book.call(swiss, ...flightData);
    
    // Bind method
    const bookEW = book.bind(eurowings);
    const bookLH = book.bind(lufthansa);
    const bookLX = book.bind(swiss);
    
    bookEW(233, "Steven Williams");
    
    const bookEW23 = book.bind(eurowings, 23);
    bookEW23("Jonas Schmedtmann");
    bookEW23("Martha Cooper");
    
    // With Event listeners
    lufthansa.planes = 300;
    lufthansa.buyPlane = function () {
        console.log(this);
        this.planes++;
        console.log(this.planes);
    };
    // lufthansa.buyPlane();
    document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
    
    // Partial application
    const addTax = (rate, value) => value + value * rate;
    console.log(addTax(0.1, 200));
    
    const addVAT = addTax.bind(null, 0.23);
    // addVAT = value => value + value * 0.23;
    
    console.log(addVAT(100));
    console.log(addVAT(23));
    
    const addTaxRate = function(rate){
        return function (value){
            return value + value * rate;
        };
    };
    const addVAT2 = addTaxRate(0.23);
    console.log(addVAT(100));
    console.log(addVAT(23));*/

    /*const poll = {
        question: "What is your favorite programming language?",
        options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
        answers: new Array(4).fill(0),
        registerNewAnswer() {
            // Get answer
            const answer = Number(prompt(`${this.question}\n${this.options.join("\n")}\n(Write option number)`));
            console.log(answer);
            // Register answer
            typeof answer === "number" && answer < this.answers.length && this.answers[answer]++;
    
            // console.log(this.answers);
            this.displayResults("string")
        },
        displayResults(type = "array") {
            if (type === "array") {
                console.log(this.answers);
            } else if (type === "string") {
                console.log(`Poll results are ${this.answers.join(", ")}`)
            }
        }
    }
    // poll.registerNewAnswer();
    
    document
        .querySelector(".poll")
        .addEventListener("click", poll.registerNewAnswer.bind(poll));
    
    poll.displayResults.call({ answers: [5, 2, 3] }, "string");
    poll.displayResults.call({ answers: [1, 5, 3, 9, 6] }, "string");
    poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });*/

    /*const runOnce = function(){
        console.log("This will never run again");
    };
    runOnce();
    (function(){
        console.log("This will never run again");
        const isPrivate = 23;
    })();
    
    (() => console.log("This will ALSO never run again"))
    ();
    {
        const isPrivate = 23;
        var notPrivate = 46;
    }
    // console.log(isPrivate);
    console.log(notPrivate);*/

    /*const secureBooking = function () {
        let passengerCount = 0;
        return function () {
            passengerCount++;
            console.log(`${passengerCount} passengers`);
        }
    }
    
    const booker = secureBooking();
    
    booker();
    booker();
    booker();
    
    console.dir(booker);*/

    /*// Example 1
    let f;
    
    const g = function () {
        const a = 23;
        f = function () {
            console.log(a * 2);
        }
    }
    
    const h = function () {
        const b = 777;
        f = function () {
            console.log(b * 2);
        };
    }
    
    g();
    f();
    console.dir(f);
    
    // Re-assigning f function
    h();
    f();
    console.dir(f);
    
    // Example 2
    const boardPassengers = function (n, wait) {
        const perGroup = n / 3;
        setTimeout(function () {
            console.log(`We are now boarding all ${n} passengers`);
            console.log(`There are 3 groups, each with ${perGroup} passengers`)
        },wait * 1000);
        console.log(`Will start boarding in ${wait} seconds`);
    };
    const perGroup = 1000;
    boardPassengers(180, 3);*/

    /*(function () {
        const header = document.querySelector("h1");
        header.style.color = "red";

        document.querySelector("body").addEventListener("click", function () {
            header.style.color = "blue";
        })
    })();*/