import { ClearForm } from "../components/patientRegistrationForm";
const btn = document.getElementById("deleteProcedure-btn") as HTMLButtonElement;

// add a feedback message after deleting    
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const confirmation = confirm("Are you sure you want to delete this procedure?");
    if (confirmation) {
        ClearForm(); 
    } 
});