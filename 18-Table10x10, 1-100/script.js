const table = document.getElementById('table');
const rows = 10;
const cols = 10;
let count = 1;

for (let i = 0; i < rows; i++) {
    const row = table.insertRow();

    for (let j = 0; j < cols; j++) {
        const cell = row.insertCell();
        cell.textContent = count;
        count++;
    }
}