import { getFormData, clearForm, validateMandatoryFields } from "../components/patientRegistrationForm"; 
import { updateSchedulerTable, schedulerTableRowType } from "../components/scheduler-table";
const registerPatientBtn = document.getElementById("registerPatient-btn") as HTMLButtonElement;

registerPatientBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const allFieldsFilled = validateMandatoryFields();

    if (allFieldsFilled) {
        const formdata = getFormData(); // console.log("Form data: ", formdata);
        
        const lastName = formdata["lastName"] as string;
        const firstName = (formdata["firstName"] as string || "").trim();
        const patientText = firstName ? `${lastName}, ${firstName}` : lastName;
        const procedureText = getProcedureText(formdata as Record<string, string>);

        const date = new Date();
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}` 
                            + ` ` + date.toLocaleTimeString();

        const rowData: schedulerTableRowType = {
            id: formdata["patientId"] as string,
            patient: patientText,
            procedure: procedureText,
            date: formattedDate
        };

        updateSchedulerTable(rowData);
        clearForm();
    }

});

// get the text from BodyPart and Laterality fields
function getProcedureText(formdata: Record<string, string>): string {
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