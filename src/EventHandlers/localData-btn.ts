/**TODO placeholder functionality for testing. TBD */
import { FillPatientRegistrationForm } from "../components/patientRegistrationForm";
import { GetNewMockData } from "../test/patientRegistrationForm-test";

const localDataBtn = document.getElementById('localData-btn') as HTMLButtonElement;
if (localDataBtn) {
    localDataBtn.disabled = false;
    localDataBtn.addEventListener('click', (e) => {
        e.preventDefault();
        FillPatientRegistrationForm(GetNewMockData());
    });
}