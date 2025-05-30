import { FillPatientRegistrationForm, PatientRegistrationForm } from "../components/patientRegistrationForm";
import { GetData } from "../components/data";

const registrationOptionsRight = document.getElementById('registration-options-right') as HTMLDivElement;
const regtrationEditBtns = document.getElementById('registration-edit-options') as HTMLDivElement;

// Add event listener to the scheduler table rows
// tables rows are dynamically added when user registers a new patient
export function AddTableRowEventListener(newRow: HTMLTableRowElement) {
    // add event listener to the new row
    newRow.addEventListener('click', () => {
        selectSchedulerRow(newRow);
    });
}

function selectSchedulerRow(newRow: HTMLTableRowElement) {
    // populate the form with the data from the clicked row
    const rowIndex = newRow.rowIndex;
    const formdata = GetData(); 
    // check if rowIndex is valid
    if (rowIndex < 1 || rowIndex > formdata.length) {
        console.error("Invalid row index: ", rowIndex);
        return;
    }
    
    FillPatientRegistrationForm(formdata[rowIndex-1]);

    // mark the clicked row as selected
    const siblinRows = newRow.parentElement?.children as HTMLCollectionOf<HTMLTableRowElement>;
    for (let i = 0; i < siblinRows.length; i++) {
        siblinRows[i].classList.remove('selected');
    }
    newRow.classList.add('selected');

    // disable the registration options right buttons
    setRegistrationOptionsBtns();
    
}

// listen for PatientRegistrationForm change event
PatientRegistrationForm.addEventListener('formChanged', () => {
    // remove selected class from all rows
    const allRows = document.querySelectorAll('#scheduler-table tbody tr');
    allRows.forEach(row => {
        row.classList.remove('selected');
    });
    // enable the registration options right buttons
    setRegistrationOptionsBtns(false);
});

/* Registration Options Buttons to disable/enable top right buttons & edit options
* @param opt - boolean, true to disable registration options buttons, enable edit options buttons
*               false to enable registration options buttons, disable edit options buttons
*               default is true
*/
function setRegistrationOptionsBtns(opt: boolean = true) {
    const registrationButtons = registrationOptionsRight.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    registrationButtons.forEach((button, index) => {
        if (index !== 0) { /** TODO: TBD emergency btn functionality */
            button.disabled = opt;
        }
    });

    const registrationEditOptions = regtrationEditBtns.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    registrationEditOptions.forEach(button => {
        button.disabled = !opt;
    });
}