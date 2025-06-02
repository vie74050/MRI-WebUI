import { ClearForm } from "../components/patientRegistrationForm";
import { DialogModal } from "../components/dialogModal";

const btn = document.getElementById("deleteProcedure-btn") as HTMLButtonElement;

if (btn) {
    btn.title = "Clear form";
    btn.setAttribute("data-bs-toggle", "tooltip");
    btn.setAttribute("data-bs-placement", "top");
    btn.disabled = false;
    // add a feedback message after deleting    
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        
        DialogModal.confirm("Are you sure you want to clear the form?").then((confirmation) => {
            if (confirmation) {
            ClearForm();
            }
        });
    });
}

