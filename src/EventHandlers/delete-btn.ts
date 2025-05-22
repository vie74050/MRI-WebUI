import { patientRegistrationForm as formEl, clearForm } from "../components/patientRegistrationForm";
const btn = document.querySelector("#delete-btn") as HTMLButtonElement;

btn.addEventListener("click", (e) => {
    e.preventDefault();
    clearForm(formEl);
});