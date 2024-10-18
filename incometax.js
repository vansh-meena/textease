document.querySelector("#calculateBtn").addEventListener("click", () => {
    const year = parseInt(document.getElementById("year").value);
    const ageInput = document.getElementById("age").value;
    let age = ageInput === "60+" ? 60 : 35;
    const preFormattedIncome = document.getElementById("salary").value;
    const income = parseFloat(preFormattedIncome.replace(/[^\d.-]/g, ""));
    const regime = document.getElementById("regime").value;

    if (!year || isNaN(income) || !regime || income <= 0) {
        alert("Please fill out all fields with valid information.");
        return;
    }

    let tax;
    switch (year) {
        case 2019:
            tax = calculateIncomeTax2019(income, age);
            break;
        case 2020:
            tax = calculateIncomeTax2020(income, age);
            break;
        case 2021:
            tax = calculateIncomeTax2021(income, age, regime);
            break;
        case 2022:
            tax = calculateIncomeTax2022(income, age, regime);
            break;
        case 2023:
            tax = calculateIncomeTax2023(income, age, regime);
            break;
        default:
            alert("Tax calculation for the selected year is not available.");
            return;
    }

    const resultText = `The income tax for an individual with income of ₹${income}, under ${regime} regime in ${year} is ₹${tax.toFixed(2)}`;

    const resultDiv = document.getElementById("result");
    resultDiv.innerText = resultText;
});

function calculateIncomeTax2019(income, age) {
    let tax = 0;
    if (age < 60) {
        if (income <= 250000) tax = 0;
        else if (income <= 500000) tax = (income - 250000) * 0.05;
        else if (income <= 1000000) tax = 12500 + (income - 500000) * 0.20;
        else tax = 112500 + (income - 1000000) * 0.30;
    } else if (age >= 60 && age < 80) {
        if (income <= 300000) tax = 0;
        else if (income <= 500000) tax = (income - 300000) * 0.05;
        else if (income <= 1000000) tax = 10000 + (income - 500000) * 0.20;
        else tax = 110000 + (income - 1000000) * 0.30;
    } else {
        return "Income tax rules for individuals aged 80 years and above are not defined.";
    }
    return tax;
}

function calculateIncomeTax2020(income, age) {
    let tax = 0;
    if (age < 60) {
        if (income <= 250000) tax = 0;
        else if (income <= 500000) tax = (income - 250000) * 0.05;
        else if (income <= 1000000) tax = 12500 + (income - 500000) * 0.20;
        else tax = 112500 + (income - 1000000) * 0.30;
    } else if (age >= 60 && age < 80) {
        if (income <= 300000) tax = 0;
        else if (income <= 500000) tax = (income - 300000) * 0.05;
        else if (income <= 1000000) tax = 10000 + (income - 500000) * 0.20;
        else tax = 110000 + (income - 1000000) * 0.30;
    } else {
        return "Income tax rules for individuals aged 80 years and above are not defined.";
    }
    return tax;
}

function calculateIncomeTax2021(income, age, regime = "existing") {
    let tax = 0;
    if (regime === "existing") {
        if (age < 60) {
            if (income <= 250000) tax = 0;
            else if (income <= 500000) tax = (income - 250000) * 0.05;
            else if (income <= 1000000) tax = 12500 + (income - 500000) * 0.20;
            else tax = 112500 + (income - 1000000) * 0.30;
        } else if (age >= 60 && age < 80) {
            if (income <= 300000) tax = 0;
            else if (income <= 500000) tax = (income - 300000) * 0.05;
            else if (income <= 1000000) tax = 10000 + (income - 500000) * 0.20;
            else tax = 110000 + (income - 1000000) * 0.30;
        }
    } else if (regime === "new") {
        if (income <= 250000) tax = 0;
        else if (income <= 500000) tax = (income - 250000) * 0.05;
        else if (income <= 750000) tax = 12500 + (income - 500000) * 0.10;
        else if (income <= 1000000) tax = 37500 + (income - 750000) * 0.15;
        else if (income <= 1250000) tax = 75000 + (income - 1000000) * 0.20;
        else if (income <= 1500000) tax = 125000 + (income - 1250000) * 0.25;
        else tax = 187500 + (income - 1500000) * 0.30;
    }
    return tax;
}

function calculateIncomeTax2022(income, age, regime = "old") {
    return calculateIncomeTax2021(income, age, regime);
}

function calculateIncomeTax2023(income, age, regime = "old") {
    return calculateIncomeTax2021(income, age, regime);
}