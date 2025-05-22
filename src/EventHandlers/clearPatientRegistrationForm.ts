import { ResetSelection } from "./patientOrientation";
const btn = document.querySelector("#delete") as HTMLButtonElement;
const form = document.querySelector("#pt-registration") as HTMLFormElement;

btn.addEventListener("click", (e) => {
    e.preventDefault();
    clearForm();
});

function clearForm() {
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
        if (input.type !== "submit") {
        input.value = "";
        }
    });
    const selects = form.querySelectorAll("select");
    selects.forEach((select) => {
        select.selectedIndex = 0;
    });
    const textareas = form.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
        textarea.value = "";
    }); 

    ResetSelection();

}