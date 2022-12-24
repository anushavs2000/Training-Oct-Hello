"use strict";

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const accounts = [account1, account2];

/*const account1 = {
    owner: "Jonas Schmeddtmann",
    movements: [200, 450, -400, 3000, -650, 130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];*/

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelsumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const formatMovementDate = function (date, locale) {
    // const type = mov > 0 ? "deposit" : "withdrawal";
    const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24))

    const daysPassed = calcDaysPassed(new Date(), date)
    console.log(daysPassed)

    if (daysPassed === 0) return "Today"
    if (daysPassed === 1) return "Yesterday"
    if (daysPassed <= 7) return `${daysPassed} days ago`

    // const day = `${date.getDate()}`.padStart(2, 0)
    // const month = `${date.getMonth() + 1}`.padStart(2, 0)
    // const year = date.getFullYear()
    // return `${day}/${month}/${year}`

    // const day = `${date.getDate()}`.padStart(2, 0)
    // const month = `${date.getMonth() + 1}`.padStart(2, 0)
    // const year = date.getFullYear()
    // return `${day}/${month}/${year}`
    return new Intl.DateTimeFormat(locale).format(date);

}

const formatCur = function (value, locale, currency) {
    return new Intl.NumberFormat(locale, { styel: "currency", currency: currency, }).format(value)
}

const displayMovements = function (acc, sort = false) {
    containerMovements.innerHTML = "";
    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? "deposit" : "withdrawal";

        const date = new Date(acc.movementsDates[i])
        const displayDate = formatMovementDate(date, acc.locale)
        const formattedMov = formatCur(mov, acc.locale, acc.currency)
        // const day = `${date.getDate()}`.padStart(2, 0)
        // const month = `${date.getMonth() + 1}`.padStart(2, 0)
        // const year = date.getFullYear()
        // const displayDate = `${day}/${month}/${year}`

        // const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)

        const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
        </div>`;
        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
};
// displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = formatCur(acc.balance, acc.locale, acc.currency);

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = formatCur(acc.balance, acc.locale, acc.currency);

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelsumInterest.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};
// calcDisplaySummary(account1.movements);


const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(" ")
            .map(name => name[0])
            .join("");
    });
};
createUsernames(accounts);

const updateUI = function (acc) {
    displayMovements(acc);
    calcDisplayBalance(acc);
    calcDisplaySummary(acc);
}

const startLogOutTimer = function () {
    const tick = function () {
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const sec = String(time % 60).padStart(2, 0);
        labelTimer.textContent = `${min}:${sec}`;

        if (time === 0) {
            clearInterval(timer)
            labelWelcome.textContent = "Log into get started"
            containerApp.style.opacity = 0
        }
        time--;
    }
    let time = 120;
    tick();
    const timer = setInterval(tick, 1000);
    return timer;
}
// Event handler
let currentAccount, timer;

// currentAccount = account1;
// updateUI(currentAccount)
// containerApp.style.opacity = 100

// const now = new Date()
// const options = {
//     hour: "numeric",
//     minute: "numeric",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     weekday: "long",
// }
// const locale = navigator.language
// console.log(locale)
// labelDate.textContent = new Intl.DateTimeFormat("en-GB", options).format(now);

// const now = new Date()
// const day = `${now.getDate()}`.padStart(2, 0)
// const month = `${now.getMonth() + 1}`.padStart(2, 0)
// const year = now.getFullYear()
// const hour = now.getHours()
// const min = `${now.getMinutes()}`.padStart(2, 0)
// labelDate.textContent = `${day}/${month}/${year},${hour}:${min}`

btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    currentAccount = accounts.find((acc) => acc.username === inputLoginUsername.value);
    console.log(currentAccount);
    if (currentAccount?.pin === +(inputLoginPin.value)) {
        // console.log("LOGIN")
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`;
        containerApp.style.opacity = 100;

        const now = new Date();
        const options = {
            hour: "numeric",
            minute: "numeric",
            day: "numeic",
            month: "numeric",
            year: "numeric"
        }

        labelDate.textContent = new Intl.DateTimeFormat(
            currentAccount.locale,
            options
        ).format(now);

        // const now = new Date()
        // const day = `${now.getDate()}`.padStart(2, 0)
        // const month = `${now.getMonth() + 1}`.padStart(2, 0)
        // const year = now.getFullYear()
        // const hour = `${now.getHours()}`.padStart(2, 0)
        // const min = `${now.getMinutes()}`.padStart(2, 0)
        // labelDate.textContent = `${day}/${month}/${year},${hour}:${min}`

        inputLoginUsername.value = inputLoginPin.value = "";
        inputLoginPin.blur();

        if (timer) clearInterval(timer);
        timer = startLogOutTimer();

        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = + inputTransferAmount.value;
    const receiverAcc = accounts.find((acc) => acc.username === inputTransferTo.value);
    // console.log(amount, receiverAcc);
    inputTransferAmount.value = inputTransferTo.value = "";

    if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
        // console.log("Transfer valid");
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        currentAccount.movementsDates.push(new Date().toISOString())
        receiverAcc.movementsDates.push(new Date().toISOString())

        updateUI(currentAccount);

        clearInterval(timer)
        timer = startLogOutTimer()
    }
});

btnLoan.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = Math.floor(inputLoanAmount.value);
    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        setTimeout(function () {

            currentAccount.movements.push(amount);

            currentAccount.movementsDates.push(new Date().toISOString())

            updateUI(currentAccount)

            clearInterval(timer)
            timer = startLogOutTimer()
        }, 2500);
    }
    inputLoanAmount.value = "";
})

btnClose.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("Delete");
    if (inputCloseUsername.value === currentAccount.username && +inputClosePin.value === currentAccount.pin) {
        const index = accounts.findIndex(
            (acc) => acc.username === currentAccount.username
        );
        console.log(index);
        accounts.splice(index, 1);
        containerApp.style.opacity = 0;
    }
    // inputTransferAmount.value = inputTransferTo.value = "";
    inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});

// console.log(accounts);

// const user = "Steven Thomas Williams";

// const createUsernames = function (user){
// const username = user
// .toLowerCase()
// .split(" ")
// // .map(function (name) {
// //     return name[0];
// // }).join("");
// .map(name => name[0])
// .join("");
// return username;
// }
// // console.log(username);
// console.log(createUsernames("Steven Thomas Williams"));

// console.log( containerMovements.innerHTML);
// LECTURES

/*const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"]
]);

currencies.forEach(function(value, key, map){
    console.log(`${key}: ${value}`);
})

// set
const currenciesUnique = new Set (["USD", "GBP","USD", "EUR", "EUR"])
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, key, map){
    console.log(`${value}: ${value}`);
});*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*const balance = movements.reduce((acc,cur)=> acc + cur, 0);
console.log(balance);

let balance2 = 0;
for(const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov)=> {
    if(acc > mov)
    return acc;
    else
    return mov;
},movements[0])
console.log(max);*/
// console.log(movements);
// const balance = movements.reduce(function(acc, cur, i, arr){
//     console.log(`Iteration ${i}: ${acc}`)
//     return acc + cur;
// }, 0);
// console.log(balance);
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);
/*const deposits = movements.filter(function (mov, i, arr) {
    return mov > 0;
})
console.log(movements);
console.log(deposits);

const depositsFor =[];
for(const mov of movements)if (mov> 0)depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov <0);
console.log(withdrawals)*/

/*const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov){
//     return mov * eurToUsd;
//     // return 23;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementDescriptions = movements.map((mov, i)=>`Movement${i+1}:You ${mov>0 ? "deposited":"withdrew"}${Math.abs(mov)}`);
console.log(movementDescriptions)*/

/*for (const movement of movements) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`)
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`)
    }
}

for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`)
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
    }
}

console.log("----FOREACH ------")
movements.forEach(function (movement) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`)
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`)
    }
});

movements.forEach(function (mov, i, arr) {
    if (mov > 0) {
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
    }
});*/

/*///////////////////////////////////
// SLICE
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join("-"));*/

/*const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-2));

console.log("jonas".at(0));
console.log("Jonas".at(-1));*/

/*const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    // dogsJulia.slice(1,3);
    // console.log(dogsJuliaCorrected);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);
    dogs.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
        } else {
            console.log(`Dog number ${i + 1} is still a puppy`);
        }
    })
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);*/

/*const calcAverageHumanAge2 = function (ages) {
    const humanAges = ages
        .map(age => age <= 2 ? 2 * age : 16 + age * 4)
    const adults = humanAges
        .filter(age => age >= 18)
    // console.log(humanAges);
    // console.log(adults);
    // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    const average = adults
        .reduce((acc, age, i, arr) => acc + age / adults.length, 0);
    return average;
}
const calcAverageHumanAge = ages => ages
    .map(age => age <= 2 ? 2 * age : 16 + age * 4)
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0)

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
console.log(avg1, avg2);*/

/*const euroToUsd = 1.1;
console.log(movements);
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map((mov, i, arr) => {
        // console.log(arr);
        return mov * euroToUsd;
    })
    // .map(mov => mov * euroToUsd)
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);*/

/*const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);
console.log(accounts);
const account = accounts.find(acc => acc.owner === "Jessica Davis");
console.log(account);*/

/*console.log(movements)
console.log(movements.includes(-130));

console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));*/

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());


// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements =accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov)=>acc + mov, 0);
// console.log(overalBalance);

/*const overalBalance = accounts
.map(acc => acc.movements)
.flat()
.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance)

const overalBalance2 = accounts
.flatMap(acc => acc.movements)
.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2)*/

/*const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);

console.log(movements);
console.log(movements.sort());
console.log(movements);
// movements.sort((a, b) => {
//     if (a > b)
//         return 1;
//     if (b > a)
//         return - 1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// movements.sort((a, b) => {
//     if (a > b)
//         return -1;
//     if (b > a)
//         return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);*/

/*const arrr = [1, 2, 3, 4, 5, 6, 7]
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
// x.fill(1);
console.log(x);
x.fill(1, 3, 5);
console.log(x);

arrr.fill(23, 2, 6);
console.log(arrr);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const movementsUI = Array.from(document.querySelectorAll(".movements__value"));
console.log(movementsUI);

labelBalance.addEventListener("click", function(){
    const movementsUI = Array.from(
        document.querySelectorAll(".movements__value"),
        el => Number(el.textContent.replace("€",""))
        );
    console.log(movementsUI)
});*/

/*const bankDepositeSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositeSum);

// const numDeposits1000 = accounts
// .flatMap(acc => acc.movements)
// .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000)

const numDeposited1000 = accounts
    .flatMap(acc => acc.movements)
    .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposited1000);

let a = 10;
console.log(a++);
console.log(a);

// const sums = accounts
const { deposits, withdrawals } = accounts
    .flatMap(acc => acc.movements).reduce((sums, cur) => {
        // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
        sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
        return sums;
    }, { deposits: 0, withdrawals: 0 });
console.log(deposits, withdrawals);*/

/*const convertTitleCase = function (title) {
    const capitalize = str => str [0].upperCase() + str.slice(1);
    const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"]

    const titleCase = title
        .toLowerCase()
        .split(" ")
        .map((word) =>
            exceptions.includes(word) ? word : capitalize(word))
        .join(" ");
    // return titleCase;
    return capitalize(titleCase);
};
console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));*/

/*const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "Bob"] },
    { weight: 32, curFood: 340, owners: ["Michael"] }
]

dogs.forEach(dog => (dog.recFood = dog.weight ** 0.75 * 28));
console.log(dogs)

const dogSarah = dogs.find(dog => dog.owners.includes("Sarah"))
console.log(dogSarah);
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? "much" : "little"}`)

const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners)
console.log(ownersEatTooMuch)

const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recFood)
    .flatMap(dog => dog.owners)
console.log(ownersEatTooLittle)

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`)
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`)

console.log(dogs.some(dog => dog.curFood === dog.recFood));

const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood > dog.recFood * 1.1
console.log(dogs.some(checkEatingOkay))

console.log(dogs.filter(checkEatingOkay))

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood)
console.log(dogsSorted)*/

/*console.log(23 === 23.0)
console.log(0.1 + 0.2)
console.log(0.1 + 0.2 === 0.3)


// Conversion
console.log(Number("23"))
console.log(+ "23")

// Parsing
console.log(Number.parseInt("30px"))
console.log(Number.parseInt("px"))
console.log(Number.parseInt("30px", 10))
console.log(Number.parseInt("e23", 10))
console.log(Number.parseInt("2.5rem"))

console.log(Number.parseFloat("2.5rem"))
console.log(parseFloat("2.5rem"))

console.log(Number.isNaN(2))
console.log(Number.isNaN("20"))
console.log(Number.isNaN(+"2x"))
console.log(Number.isNaN(23 / 0))

console.log(Number.isFinite(20))
console.log(Number.isFinite("20"))
console.log(Number.isFinite(+"20x"))
console.log(Number.isFinite(23 / 0))

console.log(Number.isInteger(20))
console.log(Number.isInteger("20"))
console.log(Number.isInteger(+"20x"))
console.log(Number.isInteger(23 / 0))

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2))
console.log(8 ** (1 / 3))

console.log(Math.max(5, 18, 23, 11, 2))
console.log(Math.max(5, 18, "23", 11, 2))
console.log(Math.max(5, 18, "23px", 11, 2))

console.log(Math.min(5, 18, 23, 11, 2))
console.log(Math.min(5, 18, "23", 11, 2))
console.log(Math.min(5, 18, "23px", 11, 2))

console.log(Math.PI * Number.parseFloat("10px") ** 2)

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min
console.log(randomInt(10, 50))

console.log(Math.trunc(23.3))

console.log(Math.round(23.3))
console.log(Math.round(23.9))

console.log(Math.ceil(23.3))
console.log(Math.ceil(23.9))

console.log(Math.floor(23.3))
console.log(Math.floor("23.9"))

console.log(Math.trunc(23.3))
console.log(Math.trunc(-23.3))
console.log(Math.floor(-23.3))

console.log((2.7).toFixed(0))
console.log((2.7).toFixed(3))
console.log((2.345).toFixed(2))
console.log(+(2.3456).toFixed(2))*/

/*console.log(5 % 2)
console.log(5 / 2)

console.log(8 % 3)
console.log(8 / 3)

console.log(6 % 2)
console.log(6 / 2)

console.log(7 % 2)
console.log(7 / 2)

const isEven = n => n % 2 === 0;
console.log(isEven(8))
console.log(isEven(23))
console.log(isEven(524))

labelBalance.addEventListener("click", function () {

    [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
        if (i % 2 === 0) row.style.backgroundColor = "orangered"
        if ((i - 1) % 2 === 0) row.style.backgroundColor = "blue"
    })
})*/

/*const diameter = 287_460_000_000
console.log(diameter);

const price = 345_99
console.log(price)

const transferFee1 = 15_00
const transferFee2 = 1_500

const PI = 3.14_15
console.log(PI)

console.log(Number("230_000"));
console.log(parseInt("2300_00"))*/

/*console.log(2 ** 53 - 1)
console.log(Number.MAX_SAFE_INTEGER)
console.log(2 ** 53 + 1)
console.log(2 ** 53 + 2)
console.log(2 ** 53 + 3)
console.log(2 ** 53 + 4)
console.log(2 ** 54 + 1)

console.log(87465654984951654565884986621216548413215456n)
console.log(BigInt(87465654984951654565884986621216548413215456n))

console.log(10000n + 10000n)
console.log(444654884611649846516545165n * 1000000000000000n)

const huge = 54846168846516n
const num = 23
console.log(huge * BigInt(num))

console.log(20n > 15)
console.log(20n === 20)
console.log(typeof 20n)
console.log(20n == "20")

console.log(huge + " is REALLY big!!!")

console.log(10 / 3)
console.log(10n / 3n)*/

/*const now = new Date();
console.log(now)
console.log(new Date("Aug 02 2020 18:05:41"))
console.log(new Date("December 24, 2015"))
console.log(new Date(account1.movementsDates[0]))

console.log(new Date(2037, 10, 19, 15, 23, 5))
console.log(new Date(2037, 10, 31))

console.log(new Date(0))
console.log(new Date(3 * 24 * 60 * 60 * 1000))*/

/*const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear())
console.log(future.getMonth())
console.log(future.getDate())
console.log(future.getDay())
console.log(future.getHours())
console.log(future.getMinutes())
console.log(future.getSeconds())
console.log(future.toISOString())
console.log(future.getTime())

console.log(new Date(2142237180000))

console.log(Date.now())

future.setFullYear(2040)
console.log(future)*/

// const future = new Date(2037, 10, 19, 15, 23)
// console.log(+future);
// // const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)

// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24))
// console.log(days1)

/*const num = 3884764.23

const option = {
    style: "unit",
    unit: "mile-per-hour"
}
console.log("US:   ", new Intl.NumberFormat("en-US").format(num))
console.log("Germany: ", new Intl.NumberFormat("de-DE").format(num))
console.log("Syria: ", new Intl.NumberFormat("ar-SY").format(num))
console.log(navigator.language, new Intl.NumberFormat(navigator.language).format(num))*/

/*const ingredients = ["olives", "spinach"]
const pizzaTimer = setTimeout((ing1, ing2) => console.log("Here is your pizza"), 3000, ...ingredients)
console.log("Waiting...")

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer)

setInterval(function () {
    const now = new Date()
    console.log(now)
}, 1000)*/