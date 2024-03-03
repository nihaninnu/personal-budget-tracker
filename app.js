let incomeList = document.getElementById('incomeList');
let expenseList = document.getElementById('expenseList');
let totalIncomeElement = document.getElementById('totalIncome');
let totalExpensesElement = document.getElementById('totalExpenses');
let remainingBudgetElement = document.getElementById('remainingBudget');

let totalIncome = 0;
let totalExpenses = 0;

function addIncome() {
    let incomeAmount = parseFloat(document.getElementById('incomeAmount').value);

    if (!isNaN(incomeAmount) && incomeAmount > 0) {
        totalIncome += incomeAmount;
        updateSummary();
        appendToList(incomeList, incomeAmount, 'Income');
    }
}

function addExpense() {
    let expenseDescription = document.getElementById('expenseDescription').value;
    let expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

    if (!isNaN(expenseAmount) && expenseAmount > 0) {
        totalExpenses += expenseAmount;
        updateSummary();
        appendToList(expenseList, expenseAmount, expenseDescription);
    }
}

function updateSummary() {
    totalIncomeElement.textContent = totalIncome.toFixed(2);
    totalExpensesElement.textContent = totalExpenses.toFixed(2);
    
    let remainingBudget = totalIncome - totalExpenses;
    remainingBudgetElement.textContent = remainingBudget.toFixed(2);

    remainingBudgetElement.style.color = remainingBudget >= 0 ? 'green' : 'red';
}

function appendToList(list, amount, description) {
    let listItem = document.createElement('li');
    listItem.textContent = `${description}: $${amount.toFixed(2)}`;
    list.appendChild(listItem);
}

// You can add additional features, validations, and improvements as needed.
