import { ResetSortIcon } from "../EventHandlers/scheduler-sort-btns";
import { FormDataType, RemoveDataByIndex } from "./data";
import { AddTableRowEventListener } from "../EventHandlers/scheduler-table-row";

const schedulerTable = document.getElementById('scheduler-table') as HTMLTableElement;
type schedulerTableRowType = {
    id: string;
    patient: string;
    procedure: string;
    date: string;
}

// Update the scheduler table with a new row
function AddSchedulerTableRow(formdata: FormDataType) {
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
    SortTableByIndex();
}

// Remove a row from the scheduler table
// If rowIndex is provided, remove that row; otherwise, remove the .selected row if any
function RemoveSchedulerTableRow(rowIndex?: number) {
    let indexToRemove: number | undefined = rowIndex;

    if (indexToRemove === undefined) {
        // Find the row with 'selected' class
        const rows = Array.from(schedulerTable.rows).slice(1); // Exclude header
        const selectedRow = rows.find(row => row.classList.contains('selected'));
        //console.log("Selected row:", rows);
        if (selectedRow) {
            indexToRemove = parseInt(selectedRow.cells[0].innerText, 10);

            // delete selected row from the table
            schedulerTable.deleteRow(selectedRow.rowIndex);
            // Remove data from the __DATA_ array
            RemoveDataByIndex(indexToRemove - 1); // Adjust index for data array (header row is excluded)
            // sort the table by index
            SortTableByIndex();
            // Update remaining rows' index
            for (let i = 1; i < schedulerTable.rows.length; i++) {
                schedulerTable.rows[i].cells[0].innerText = (i).toString(); // Update index in the first cell
            }

        }
    }

}

// Update the scheduler table data
function UpdateSchedulerTableRow(rowIndex: number, formdata: FormDataType) {
    const rowData: schedulerTableRowType = getRowdDataFromFormData(formdata);SortTableByIndex(); // Resort the table by index
    const row = schedulerTable.rows[rowIndex];
    if (row) {
        row.cells[0].innerText = (rowIndex).toString(); // Update index
        row.cells[1].innerText = rowData.patient; // Update patient name
        row.cells[2].innerText = rowData.procedure; // Update procedure
    }
    
    
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

    ResetSortIcon(); // Reset sort icon 
}

/* * Get the index of the selected row in the scheduler table.
 * Returns the index of the selected row, or null if no row is selected.
*/
function GetSelectedRowIndex(): number | null {
    const selectedRow = Array.from(schedulerTable.rows).find(row => row.classList.contains('selected'));
    if (selectedRow) {
        return parseInt(selectedRow.cells[0].innerText, 10); // Return the index from the first cell
    }
    return null; // No row is selected
}

// Returns table row data from form data
function getRowdDataFromFormData(formdata: FormDataType): schedulerTableRowType {
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
function getProcedureText(formdata: FormDataType): string {
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

export { AddSchedulerTableRow, RemoveSchedulerTableRow, GetSelectedRowIndex, SortTableByPatient, SortTableByIndex, UpdateSchedulerTableRow };