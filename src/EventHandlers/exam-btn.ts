/**TODO:placeholder functionality, TBD */
// check that all required fields in pt-registration are filled when the exam button is clicked

import { ValidateMandatoryFields } from "../components/patientRegistrationForm";
const examBtn = document.getElementById("exam-btn") as HTMLButtonElement;

var examFeedback = document.createElement("div");
examFeedback.classList.add("alert","space", "center");

examBtn.addEventListener("click", (event) => {
   ValidateMandatoryFields();
});