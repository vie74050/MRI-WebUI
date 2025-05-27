import { ClearForm } from "../components/patientRegistrationForm";
const btn = document.querySelector("#deleteProcedure-btn") as HTMLButtonElement;

btn.addEventListener("click", (e) => {
    e.preventDefault();
    ClearForm(); console.log("Procedure deleted");
});