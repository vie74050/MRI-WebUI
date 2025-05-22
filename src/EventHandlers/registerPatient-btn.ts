import { saveFormData } from "../components/patientRegistrationForm"; 
const registerPatientBtn = document.getElementById("registerPatient-btn") as HTMLButtonElement;

registerPatientBtn.addEventListener("click", (e) => {
    e.preventDefault();
    saveFormData();
});