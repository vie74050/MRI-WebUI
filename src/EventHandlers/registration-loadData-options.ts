/**TODO placeholder functionality for testing. TBD */
import { FillPatientRegistrationForm } from "../components/patientRegistrationForm";
import { GetNewMockData } from "../test/patientRegistrationForm-test";

const localDataBtn = document.getElementById('localData-btn') as HTMLButtonElement;
if (localDataBtn) {
    //initializeLocalDataBtn();
}
function initializeLocalDataBtn() {
    
}

const priorStudiesBtn = document.getElementById('priorStudies-btn') as HTMLButtonElement;
if (priorStudiesBtn) {
    initializePriorStudiesBtn();
}

function initializePriorStudiesBtn() {
    priorStudiesBtn.title = "Load a random data set, for testing";
    priorStudiesBtn.setAttribute("data-bs-toggle", "tooltip");
    priorStudiesBtn.disabled = false;
    priorStudiesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        FillPatientRegistrationForm(GetNewMockData());
    });
}
