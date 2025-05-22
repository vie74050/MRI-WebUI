import { ResetSelection } from "../EventHandlers/patientOrientation";

const patientRegistrationForm = document.querySelector("#pt-registration") as HTMLFormElement;

function clearForm(form: HTMLFormElement) {
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

function saveFormData() {
    const formData = new FormData(patientRegistrationForm);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log("Form Data Object:", formDataObj);
}

export {patientRegistrationForm, clearForm, saveFormData};