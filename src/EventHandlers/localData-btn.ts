import { FillPatientRegistrationForm } from "../components/PatientRegistrationForm";
import { mockNewData } from "../test/PatientRegistrationForm-test";

const localDataBtn = document.getElementById('localData-btn') as HTMLButtonElement;
if (localDataBtn) {
    localDataBtn.disabled = false;
    localDataBtn.addEventListener('click', (e) => {
        e.preventDefault();
        FillPatientRegistrationForm(mockNewData);
    });
}