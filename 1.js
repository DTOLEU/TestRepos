'use strict'
let money = +prompt("Ваш бюджет на месяц?", "200");
let time = prompt("Введите дату в формате YYYY-MM-DD", "23.04.2019");
let expenses = {};
let optionalExpenses = {};
let income = [];
let savings = false;
let appData = {
    money,
    time,
    expenses,
    optionalExpenses,
    income,
    savings
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько обойдется?", ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько обойдется?", "");

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;
alert(money / 31);
console.log(money / 31);
console.log(appData);