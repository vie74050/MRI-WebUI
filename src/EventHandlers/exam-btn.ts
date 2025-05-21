// check that all required fields in pt-registration are filled when the exam button is clicked
const examBtn = document.getElementById("exam-btn") as HTMLButtonElement;
const ptRegistrationForm = document.getElementById("pt-registration") as HTMLFormElement;
const reistrationNote = document.getElementById("registration-note") as HTMLDivElement;
const requiredFields = ptRegistrationForm.querySelectorAll("input.field-info-safety, select.field-info-safety, textarea.field-info-safety") as NodeListOf<HTMLInputElement>;

// exception: heightFt and heightIn
const heightFt = document.getElementById("heightFt") as HTMLInputElement;
const heightIn = document.getElementById("heightIn") as HTMLInputElement;
var examFeedback = document.createElement("div");
examFeedback.classList.add("alert","space", "center");

examBtn.addEventListener("click", (event) => {
    
    // clear examFeedback if it exists
    if (reistrationNote.contains(examFeedback)) {
        reistrationNote.removeChild(examFeedback);
    }
    
    // check if all required fields are filled
    let allFieldsFilled = true;
    requiredFields.forEach((field) => {
        if (field.value.trim() === "") {
            if (field.id === "heightFt" || field.id === "heightIn") {
                if (heightFt.value.trim() === "" && heightIn.value.trim() === "") {
                   allFieldsFilled = false;
                }
            }else {
                allFieldsFilled = false;
            }
            
        } else {
           
        }
    });

    examFeedback.classList.remove("alert-danger", "alert-success");

    if (!allFieldsFilled) {
        
        examFeedback.innerHTML = "<b>Please fill all required fields.</b>";
        examFeedback.classList.add("alert-danger");
        
    }else {
        examFeedback.innerHTML = "<b>All required fields are filled. Verify the information is correct.</b>";
        examFeedback.classList.add("alert-success");
    }
    
    reistrationNote.appendChild(examFeedback);
    setTimeout(() => {
        reistrationNote.removeChild(examFeedback);
    }, 2500);
        
});