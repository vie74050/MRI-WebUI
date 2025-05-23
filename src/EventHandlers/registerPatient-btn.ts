import { getFormData, clearForm, validateMandatoryFields } from "../components/patientRegistrationForm"; 
import { updateSchedulerTable, schedulerTableRowType } from "../components/scheduler-table";
const registerPatientBtn = document.getElementById("registerPatient-btn") as HTMLButtonElement;

registerPatientBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const allFieldsFilled = validateMandatoryFields();

    if (allFieldsFilled) {
        const formdata = getFormData(); // console.log("Form data: ", formdata);
        const date = new Date();
        
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        const rowData: schedulerTableRowType = {
            id: formdata["patientId"] as string,
            patient: formdata["lastName"] as string + ", " + formdata["firstName"] as string,
            procedure: formdata["reqProcId"] as string,
            date: formattedDate + " " + date.toLocaleTimeString()
        };

        updateSchedulerTable(rowData);
        clearForm();
    }

});