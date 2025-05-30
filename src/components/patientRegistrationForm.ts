import { ResetOrientationSelect, GetOrientationData, OrientationBtn, SetOrientationData } from "../EventHandlers/orientation-btn";
import { SetLateralitySelection, ResetLateralitySelection } from "../EventHandlers/bodyPartsLaterality";
import { FormDataType } from "./data";

const PatientRegistrationForm = document.querySelector("#pt-registration") as HTMLFormElement;

function emitFormChangeEvent() {
    const formData = GetFormData();
    const formChangeEvent = new CustomEvent("formChanged", { detail: formData });
    PatientRegistrationForm.dispatchEvent(formChangeEvent);
}

/* Clears the Patient Registration Form.
 * Resets all input fields, selects, and textareas to their default values.
 * Also resets orientation and laterality selections.
 * Emits a formChanged event to notify that the form has been cleared.
*/
function ClearForm() {
    const inputs = PatientRegistrationForm.querySelectorAll("input");
    inputs.forEach((input) => {
        if (input.type !== "submit") {
        input.value = "";
        }
    });
    const selects = PatientRegistrationForm.querySelectorAll("select");
    selects.forEach((select) => {
        select.selectedIndex = 0;
    });
    const textareas = PatientRegistrationForm.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
        textarea.value = "";
    }); 

    ResetOrientationSelect();
    ResetLateralitySelection();

    // emit formChanged event 
    emitFormChangeEvent();

}

/* Saves the form content as FormDataType
 * @returns FormDataType object containing the form data
*/
function GetFormData(): FormDataType {
    // Get all form fields, including disabled ones
    const formData = new FormData();
    const elements = PatientRegistrationForm.elements as HTMLFormControlsCollection;
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        if (element.name && (element.type !== "submit" && element.type !== "button")) {
            // For checkboxes and radios, only add if checked
            if ((element.type === "checkbox" || element.type === "radio")) {
                if ((element as HTMLInputElement).checked) {
                    formData.append(element.name, element.value);
                }
            } else {
                formData.append(element.name, element.value);
            }
        }
    }
    const formDataObj = Object.fromEntries(formData.entries()) as FormDataType;
    const orientationData = GetOrientationData();
    // add orientation data to formDataObj
    formDataObj.orientationId = orientationData.iconId;
        
    return formDataObj;
}

/** Validates mandatory fields in the Patient Registration Form.
 * Checks if all required fields are filled, including at least one height field.
 * Also checks if the orientation button is not set to "Select".
 * Displays feedback in the registration note area.
 * @returns true if all mandatory fields are filled
 */
function ValidateMandatoryFields(): boolean {
    // feedback fields
    const reistrationNote = document.getElementById("registration-note") as HTMLDivElement;
    var examFeedback = document.createElement("div");
    examFeedback.classList.add("alert","space", "center");

    // get all required fields
    const requiredFields = PatientRegistrationForm.querySelectorAll("input[required], select[required], textarea[required]") as NodeListOf<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
    // exception: min 1 height field is required
    const height1 = document.getElementById("height1") as HTMLInputElement;
    const height2 = document.getElementById("height2") as HTMLInputElement;
    // exception: orientation
    const orientationData = GetOrientationData();

    // check if all required fields are filled
    let allFieldsFilled = true;
    let fieldsNotFilled: (HTMLElement)[] = [];
    requiredFields.forEach((field) => {
        if (field.value.trim() === "") {
            if (field.id === "height1" || field.id === "height2") {
                if (height1.value.trim() === "" && height2.value.trim() === "") {
                    // add empty height fields to fieldsNotFilled
                    fieldsNotFilled.push(field);
                    allFieldsFilled = false;
                }
            }else {
                fieldsNotFilled.push(field);
                allFieldsFilled = false;
            }
            
        }
    });
    // check if OrientationBtn text is not "Select"
    if (orientationData.iconText === "Select") {
        fieldsNotFilled.push(OrientationBtn);
        allFieldsFilled = false;
    }

    // feedback fields
    // clear examFeedback if it exists
    if (reistrationNote.contains(examFeedback)) {
        reistrationNote.removeChild(examFeedback);
    }  
    examFeedback.classList.remove("alert-warning", "alert-success");
    if (!allFieldsFilled) {
        examFeedback.innerHTML = "<b>Please fill all mandatory * fields.</b>";
        examFeedback.classList.add("alert-warning");
    }
    else {
        examFeedback.innerHTML = "<b>&#10003; All mandatory fields are filled.</b>";
        examFeedback.classList.add("alert-success");
    }
    reistrationNote.appendChild(examFeedback);
    fieldsNotFilled.forEach((field) => {
        field.classList.add("not-filled");
    });
    setTimeout(() => {
        reistrationNote.removeChild(examFeedback);
        fieldsNotFilled.forEach((field) => {
            field.classList.remove("not-filled");
        });
    }, 2500);
    
    return allFieldsFilled;
}

/* Fills the Patient Registration Form with data from FormDataType.
 * @param data - The data to fill the form with, of type FormDataType.
*/
function FillPatientRegistrationForm(data: FormDataType): void {
    const inputs = PatientRegistrationForm.querySelectorAll("input");
    inputs.forEach((input) => {
        if (input.type !== "submit") {
            if (data[input.name] !== undefined) {
                input.value = data[input.name];
            }
        }
    });
    
    const textareas = PatientRegistrationForm.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
        if (data[textarea.name] !== undefined) {
            textarea.value = data[textarea.name];
        }
    });

    const selects = PatientRegistrationForm.querySelectorAll("select");
    selects.forEach((select) => {
        if (data[select.name] !== undefined) {
            // find matching option value
            const value = data[select.name];
            const optionToSelect = Array.from(select.options).find(option => option.value === value);
            if (optionToSelect) {
                select.value = value;
            } else {
                select.selectedIndex = 0;
            }
        }
    });

    // set laterality selection
    if (data.bodyPart && data.laterality) {
        SetLateralitySelection(data.bodyPart, data.laterality);
    }
    // set orientation data
    if (data.orientationId) {
        SetOrientationData(data.orientationId);
    }

    // emit formChanged event 
    emitFormChangeEvent();   
}

export {PatientRegistrationForm, ClearForm, GetFormData, ValidateMandatoryFields, FillPatientRegistrationForm};