import { clearForm } from "../components/patientRegistrationForm";
const btn = document.querySelector("#deleteProcedure-btn") as HTMLButtonElement;

btn.addEventListener("click", (e) => {
    e.preventDefault();
    clearForm(); console.log("Procedure deleted");
});