import { ClearForm, PatientRegistrationForm } from "../components/patientRegistrationForm";
const btn = document.getElementById("deleteProcedure-btn") as HTMLButtonElement;

if (btn) {
    btn.title = "Clear form";
    btn.setAttribute("data-bs-toggle", "tooltip");
    btn.setAttribute("data-bs-placement", "top");
    btn.disabled = false;
    // add a feedback message after deleting    
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        
        const confirmation = confirm("Are you sure you want to clear the form?");
        if (confirmation) {
            ClearForm(); 
        } 
    });
}

