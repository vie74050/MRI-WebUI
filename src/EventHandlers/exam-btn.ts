// check that all required fields in pt-registration are filled when the exam button is clicked
const examBtn = document.getElementById("exam-btn") as HTMLButtonElement;
const ptRegistration = document.getElementById("pt-registration") as HTMLFormElement;
const reistrationNote = document.getElementById("registration-note") as HTMLDivElement;
const ptRegistrationInputs = ptRegistration.querySelectorAll("input, select, textarea");

examBtn.addEventListener("click", (event) => {
    
    // temporarily flash warning for 3 seconds
    reistrationNote.classList.add("alert-warning");
    setTimeout(() => {
        reistrationNote.classList.remove("alert-warning");
    }, 2500);
});