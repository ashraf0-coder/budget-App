// DOM Elements
const totalBudgetInput = document.getElementById('total-budget');
const setBudgetBtn = document.getElementById('set-budget-btn');
const totalBudgetDisplay = document.getElementById('total-budget-display');
const totalExpensesDisplay = document.getElementById('total-expenses-display');
const balanceDisplay = document.getElementById('balance-display');

const expenseTitleInput = document.getElementById('expense-title');
const expenseCostInput = document.getElementById('expense-cost');
const addExpenseBtn = document.getElementById('add-expense-btn');
const expenseList = document.getElementById('expense-list');

let totalBudget = 0;
let totalExpenses = 0;

// Set Budget
setBudgetBtn.addEventListener('click', () => {
  totalBudget = parseFloat(totalBudgetInput.value) || 0;
  totalBudgetDisplay.textContent = totalBudget.toFixed(2);
  updateBalance();
});

// Add Expense
addExpenseBtn.addEventListener('click', () => {
  const title = expenseTitleInput.value.trim();
  const cost = parseFloat(expenseCostInput.value) || 0;

  if (title && cost > 0) {
    totalExpenses += cost;
    totalExpensesDisplay.textContent = totalExpenses.toFixed(2);

    const li = document.createElement('li');
    li.innerHTML = `${title} - $${cost.toFixed(2)} <span class="remove-expense">x</span>`;
    expenseList.appendChild(li);

    expenseTitleInput.value = '';
    expenseCostInput.value = '';
    updateBalance();

    // Remove Expense
    li.querySelector('.remove-expense').addEventListener('click', () => {
      totalExpenses -= cost;
      totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
      li.remove();
      updateBalance();
    });
  }
});

// Update Balance
function updateBalance() {
  const balance = totalBudget - totalExpenses;
  balanceDisplay.textContent = balance.toFixed(2);
}
