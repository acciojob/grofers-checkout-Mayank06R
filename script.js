const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll('.price');
    let total = 0;
    prices.forEach(price => {
        total += parseInt(price.textContent);
    });

    // Create a new row for the total price
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // Span across both columns
    totalCell.textContent = `Total: Rs ${total}`;
    newRow.appendChild(totalCell);

    // Append the new row to the table
    document.querySelector('table').appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
