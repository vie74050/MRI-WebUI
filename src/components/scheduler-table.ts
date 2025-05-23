const schedulerTable = document.getElementById('scheduler-table') as HTMLTableElement;
type schedulerTableRowType = {
    id: string;
    patient: string;
    procedure: string;
    date: string;
}
function updateSchedulerTable(rowData: schedulerTableRowType) {
    // add new row to the table
    const newRow = schedulerTable.insertRow(-1);
    const idCell = newRow.insertCell(0);
    const patientCell = newRow.insertCell(1);
    const procedureCell = newRow.insertCell(2);
    const dateCell = newRow.insertCell(3);
    idCell.innerText = rowData.id;
    patientCell.innerText = rowData.patient;
    procedureCell.innerText = rowData.procedure;
    dateCell.innerText = rowData.date;    
    
}

export { schedulerTableRowType, updateSchedulerTable };