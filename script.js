let budget = 5000;
let expenses = [];

const form = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("expense-name").value;
    const amount = Number(document.getElementById("expense-amount").value);
    const category = document.getElementById("expense-category").value;

    if (amount <= 0 || !Number.isFinite(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    expenses.push({
        name: name,
        amount: amount,
        category: category
    });

    displayExpenses();
    form.reset();
});

function displayExpenses() {
    expenseList.innerHTML = "";

    let total = 0;

    expenses.forEach(function(expense) {
        total += expense.amount;

        const item = document.createElement("p");
        item.textContent =
            expense.name + " - KSh " +
            expense.amount + " (" +
            expense.category + ")";

        expenseList.appendChild(item);
    });

    const balance = budget - total;

    const summary = document.createElement("p");
    summary.textContent =
        "Total: KSh " + total +
        " | Remaining: KSh " + balance;

    expenseList.appendChild(summary);

    if (balance < 0) {
        alert("Warning: You have exceeded your budget!");
    } else {
        console.log("You are within your budget.");
    }
}