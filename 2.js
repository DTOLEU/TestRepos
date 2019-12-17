'use strict';
let money = +prompt("Ваш бюджет на месяц?", "200");
let time = prompt("Введите дату в формате YYYY-MM-DD", "23.04.2019");
let expenses = {};
let optionalExpenses = {};
let income = [];
let savings = false;
let appData = {
    budjet: money,
    time,
    expenses,
    optionalExpenses,
    income,
    savings
};
/*
let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько обойдется?", ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько обойдется?", "");
*/
let i = 0;
while (i < 2) {
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i--;
    }

}
appData.moneyperday = appData.budjet / 30;
alert("Ежедневный бюджет " + appData.moneyperday);

switch (appData.moneyperday) {
    case appData.moneyperday < 100:
    console.log("Минимальный достаток");
    break;
    case appData.moneyperday > 100 && appData.moneyperday < 2000:
    console.log("Средний достаток");
    break;
    case appData.moneyperday > 2000:
    console.log("Высокий достаток");
    break;
}