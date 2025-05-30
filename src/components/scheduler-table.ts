import { ResetSortIcon } from "../EventHandlers/scheduler-sort-btns";
import { formDataType, __DATA__ } from "./data";
import { AddTableRowEventListener } from "../EventHandlers/scheduler-table-row";

const schedulerTable = document.getElementById('scheduler-table') as HTMLTableElement;
type schedulerTableRowType = {
    id: string;
    patient: string;
    procedure: string;
    date: string;
}

// Update the scheduler table with a new row
function AddSchedulerTableRow(formdata: formDataType) {
    const rowData: schedulerTableRowType = getRowdDataFromFormData(formdata);

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

    AddTableRowEventListener(newRow);

    // Reset sort after adding a new row
    ResetSortIcon(); 
    SortTableByIndex();
}

// Sort table by patient
function SortTableByPatient() {
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

// Sort table by table index (row number)
// This is the index of the row in the table, not the patient ID
// which is the first column in the table. Used for lookup in __DATA_.
function SortTableByIndex() {
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

// Returns table row data from form data
function getRowdDataFromFormData(formdata: formDataType): schedulerTableRowType {
    const lastName = formdata["lastName"] as string;
    const firstName = (formdata["firstName"] as string || "").trim();
    const patientText = firstName ? `${lastName}, ${firstName}` : lastName;
    const procedureText = getProcedureText(formdata);
    const date = new Date();
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}` 
                            + ` ` + date.toLocaleTimeString();
    return {
        id: formdata["patientId"] as string,
        patient: patientText,
        procedure: procedureText,
        date: formattedDate
    };
}

// 'Procedure' column: get the text from BodyPart and Laterality fields
function getProcedureText(formdata: formDataType): string {
    let returnString = "";
    // bodyPart and laterality are mandatory fields
    // if laterality is not selected, return only bodyPart
    const bodyPart = formdata["bodyPart"] as string;
    const laterality = formdata["laterality"] as string;
    if (laterality) {
        returnString = `${bodyPart} (${laterality})`;
    } else {
        returnString = bodyPart;
    }
    // to title case
    returnString = returnString.charAt(0).toUpperCase() + returnString.slice(1).toLowerCase();

    return returnString;
}

export { AddSchedulerTableRow, SortTableByPatient, SortTableByIndex};