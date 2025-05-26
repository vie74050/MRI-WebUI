import { resetSortIcon } from "../EventHandlers/scheduler-sort-btn";
const schedulerTable = document.getElementById('scheduler-table') as HTMLTableElement;
type schedulerTableRowType = {
    id: string;
    patient: string;
    procedure: string;
    date: string;
}

// Function to update the scheduler table with a new row
function updateSchedulerTable(rowData: schedulerTableRowType) {
    // add new row to the table
    const newRow = schedulerTable.tBodies[0].insertRow(-1);
    const idCell = newRow.insertCell(0);
    const patientCell = newRow.insertCell(1);
    const procedureCell = newRow.insertCell(2);
    const dateCell = newRow.insertCell(3);
    idCell.innerText = (schedulerTable.rows.length - 1).toString();
    patientCell.innerText = rowData.patient;
    procedureCell.innerText = rowData.procedure;
    dateCell.innerText = rowData.date;    

    // Reset sort after adding a new row
    resetSortIcon(); 
    sortTableByIndex();
}

// Function to sort table by patient
function sortTableByPatient() {
    const rows = Array.from(schedulerTable.rows).slice(1); // Exclude header row
    rows.sort((a, b) => {
        const patientA = a.cells[1].innerText;
        const patientB = b.cells[1].innerText;
        return patientA.localeCompare(patientB);
    });
    // Clear the table and reinsert sorted rows
    schedulerTable.tBodies[0].innerHTML = '';
    rows.forEach(row => schedulerTable.tBodies[0].appendChild(row));
}

// function to sort table by date
function sortTableByIndex() {
    const rows = Array.from(schedulerTable.rows).slice(1); // Exclude header row
    rows.sort((a, b) => {
        const indexA = parseInt(a.cells[0].innerText, 10);
        const indexB = parseInt(b.cells[0].innerText, 10);
        return indexA - indexB; // Sort by index in ascending order
    });
    // Clear the table and reinsert sorted rows
    schedulerTable.tBodies[0].innerHTML = '';
    rows.forEach(row => schedulerTable.tBodies[0].appendChild(row));
}

export { schedulerTableRowType, updateSchedulerTable, sortTableByPatient, sortTableByIndex};