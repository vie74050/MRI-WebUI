const schedulerTable = document.getElementById('scheduler-table') as HTMLTableElement;
type schedulerTableRowType = {
    id: string;
    patient: string;
    procedure: string;
    date: string;
}

function InitSchedulerTable() {
    // init bootstrap sortabe
    
}

function updateSchedulerTable(rowData: schedulerTableRowType) {
    // add new row to the table
    const newRow = schedulerTable.insertRow(-1);
    const idCell = newRow.insertCell(0);
    const patientCell = newRow.insertCell(1);
    const procedureCell = newRow.insertCell(2);
    const dateCell = newRow.insertCell(3);
    idCell.innerText = (schedulerTable.rows.length - 1).toString();
    patientCell.innerText = rowData.patient;
    procedureCell.innerText = rowData.procedure;
    dateCell.innerText = rowData.date;    
    
}

export { schedulerTableRowType, updateSchedulerTable };