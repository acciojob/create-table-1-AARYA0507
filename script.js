function insert_Row() {
    const table = document.getElementById("sampleTable");

    
    const newRow = table.insertRow(0);

    
    const cell1 = newRow.insertCell(0);
    cell1.textContent = "New Cell1";

    // Insert second cell
    const cell2 = newRow.insertCell(1);
    cell2.textContent = "New Cell2";
}

