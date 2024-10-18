
const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const transactionList = document.getElementById('transaction-list');
const form = document.getElementById('transaction-form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');


let transactions = [];


function addTransaction(e) {
  e.preventDefault();
  
  const transaction = {
    id: generateID(),
    text: text.value,
    amount: +amount.value
  };

  transactions.push(transaction);
  addTransactionToDOM(transaction);
  updateValues();
  text.value = '';
  amount.value = '';
}


function generateID() {
  return Math.floor(Math.random() * 100000000);
}


function addTransactionToDOM(transaction) {
  const sign = transaction.amount < 0 ? '-' : '+';
  const item = document.createElement('li');

  
  item.classList.add(transaction.amount < 0 ? 'expense' : 'income');
  
  item.innerHTML = `
    ${transaction.text} <span>${sign}$${Math.abs(transaction.amount).toFixed(2)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
  `;

  transactionList.appendChild(item);
}


function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const incomeTotal = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expenseTotal = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  balance.innerText = `$${total}`
  income.innerText = `+$${incomeTotal}`
  expense.innerText = `-$${Math.abs(expenseTotal)}`
}


function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);
  updateDOM();
}


function updateDOM() {
  transactionList.innerHTML = '';
  transactions.forEach(addTransactionToDOM);
  updateValues();
}


form.addEventListener('submit', addTransaction);