import { formDataType } from "../components/data";
import { GetFormData, ClearForm, ValidateMandatoryFields } from "../components/patientRegistrationForm"; 
import { AddSchedulerTableRow } from "../components/scheduler-table";
import { __DATA__ } from "../components/data";
const registerPatientBtn = document.getElementById("registerPatient-btn") as HTMLButtonElement;

registerPatientBtn.addEventListener("click", (e) => {
    e.preventDefault();

    registerNewPatient();

});

function registerNewPatient() {
    const allFieldsFilled = ValidateMandatoryFields();

    if (allFieldsFilled) {
        const formdata = GetFormData(); // console.log("Form data: ", formdata);

        AddSchedulerTableRow(formdata);
        ClearForm();

        // add formdata to __DATA__
        if (typeof __DATA__ !== 'undefined') {
            __DATA__.push(formdata); 
            console.log("__DATA__ after adding new patient: ", __DATA__);

        } else {
            console.error("Global variable __DATA__ is not defined.");
        }
    }
}

