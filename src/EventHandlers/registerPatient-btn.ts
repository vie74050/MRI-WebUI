import { GetFormData, ClearForm, ValidateMandatoryFields } from "../components/patientRegistrationForm"; 
import { AddSchedulerTableRow } from "../components/scheduler-table";
import { AddData } from "../components/data";
const registerPatientBtn = document.getElementById("registerPatient-btn") as HTMLButtonElement;

registerPatientBtn.addEventListener("click", (e) => {
    e.preventDefault();

    registerNewPatient();

});

function registerNewPatient() {
    const allFieldsFilled = ValidateMandatoryFields("Patient has been registered successfully!");

    if (allFieldsFilled) {
        const formdata = GetFormData(); // console.log("Form data: ", formdata);

        AddSchedulerTableRow(formdata);
        ClearForm();

        // add formdata to __DATA__
        AddData(formdata);
    }
}

