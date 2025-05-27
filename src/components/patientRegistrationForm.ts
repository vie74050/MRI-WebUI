import { ResetOrientationSelect, getOrientationData, orientationBtn } from "../EventHandlers/orientation-btn";
import { ResetLateralitySelection } from "../EventHandlers/bodyPartsLaterality";
import { formDataType } from "./data";

const patientRegistrationForm = document.querySelector("#pt-registration") as HTMLFormElement;

function clearForm() {
    const inputs = patientRegistrationForm.querySelectorAll("input");
    inputs.forEach((input) => {
        if (input.type !== "submit") {
        input.value = "";
        }
    });
    const selects = patientRegistrationForm.querySelectorAll("select");
    selects.forEach((select) => {
        select.selectedIndex = 0;
    });
    const textareas = patientRegistrationForm.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
        textarea.value = "";
    }); 

    ResetOrientationSelect();
    ResetLateralitySelection();

}

function getFormData(): formDataType {
    const formData = new FormData(patientRegistrationForm);
    const formDataObj = Object.fromEntries(formData.entries()) as formDataType;
    const orientationData = getOrientationData();
    // merge orientationData with formDataObj
    Object.keys(orientationData).forEach((key) => {
        formDataObj[key] = orientationData[key];
    });
        
    return formDataObj;
}

function validateMandatoryFields(): boolean {
    // feedback fields
    const reistrationNote = document.getElementById("registration-note") as HTMLDivElement;
    var examFeedback = document.createElement("div");
    examFeedback.classList.add("alert","space", "center");

    // get all required fields
    const requiredFields = patientRegistrationForm.querySelectorAll("input[required], select[required], textarea[required]") as NodeListOf<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
    // exception: min 1 height field is required
    const height1 = document.getElementById("height1") as HTMLInputElement;
    const height2 = document.getElementById("height2") as HTMLInputElement;
    // exception: orientation
    const orientationData = getOrientationData();

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
    // check if orientationBtn text is not "Select"
    if (orientationData.iconText === "Select") {
        fieldsNotFilled.push(orientationBtn);
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
        examFeedback.innerHTML = "<b>All mandatory fields are filled. Added Patient Registration to Scheduler</b>";
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
export {patientRegistrationForm, clearForm, getFormData, validateMandatoryFields};