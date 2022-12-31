"use strict"
const budget = Object.freeze([
    { value: 250, description: "Solid old TV 📺", user: "jonas" },
    { value: -45, description: "Groceries 🥑", user: "jonas" },
    { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
    { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
    { value: -1100, description: "New iPhone 📱", user: "matilda" },
    { value: -20, description: "Candy 🍭", user: "jonas" },
    { value: -125, description: "Toys 🚂", user: "jonas" },
    { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);
budget[0].value = 1000;

const spendingLimits = Object.freeze({
    jonas: 1500,
    matilda: 100,
});
// spendingLimits.jay = 200;
// console.log(spendingLimits);

// const getLimit = (user )=> spendingLimits?.[user] ?? 0;
const getLimit = (limits, user) => limits?.[user] ?? 0;

//Pure function
const addExpense = function (state, limits, value, description, user = "jonas") {
    // if (!user) user = "jonas";
    // user = user.toLowerCase();

    // let lim;
    // if (spendingLimits[user]) {
    //     lim = spendingLimits[user];
    // } else {
    //     lim = 0;
    // }

    // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
    // const limit = spendingLimits?.[user] ?? 0;
    const cleanUser = user.toLowerCase();

    return value <= getLimit(limits, cleanUser)
        ? [...state, { value: -value, description, user: cleanUser }]
        : state;
    // if (value <= getLimit(cleanUser)) {
    //     return [...state, { value: -value, description, user: cleanUser }]

    // budget.push({ value: -value, description, user: cleanUser });
};

const newBudget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");

const newBudget2 = addExpense(newBudget1, spendingLimits, 100, "Going to movies 🍿", "matilda");

const newBudget3 = addExpense(newBudget2, spendingLimits, 200, "Stuff", "Jay");
// console.log(budget);
// console.log(newBudget1);
// console.log(newBudget2);
// console.log(newBudget3);

/*const checkExpenses = function (state, limits) {
    return state.map(entry => {
        return entry.value < -getLimit(limits, entry.user) ? { ...entry, flag: "limit" } : entry;
    })
    // for (const entry of budget) {
    // let lim;
    // if (spendingLimits[entry.user]) {
    //     lim = spendingLimits[entry.user];
    // } else {
    //     lim = 0;
    // }
    // const limit = spendingLimits?.[entry.user] ?? 0;
    // for (const entry of newBudget3)
    //     if (entry.value < -getLimit(limits,entry.user))
    //         entry.flag = "limit";

};*/

const checkExpenses = (state, limits) =>
    state.map(entry =>
        entry.value < -getLimit(limits, entry.user)
            ? { ...entry, flag: "limit" }
            : entry
    );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);
console.log(newBudget3);

console.log(budget);

// Impure
const logBigExpenses = function (state, bigLimit) {
    const bigExpenses = state.filter(entry =>entry.value<= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join("/");
    // .reduce((str,cur)=>`${str} / ${cur.description.slice(-2)}`, "");

    console.log(bigExpenses);
   /* let output = "";
    // for (const entry of budget) {
    //     if (entry.value <= -bigLimit) {
    //         output += `${entry.description.slice(-2)} /`;
    //     }
    // }
    for (const entry of budget)
        output +=
            entry.value <= -bigLimit ? `${entry.description.slice(-2)} /` : "";
    output = output.slice(0, -2);
    console.log(output);*/
};
// console.log(budget)
// logBigExpenses(500);
logBigExpenses(finalBudget, 500);