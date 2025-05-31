import { GetFormData, ValidateMandatoryFields, ClearForm } from "../components/patientRegistrationForm";
import { GetSelectedRowIndex, RemoveSchedulerTableRow } from "../components/scheduler-table";
import { UpdateDataByIndex } from "../components/data";

const saveBtn = document.getElementById('save-btn') as HTMLButtonElement;
if (saveBtn) {
    saveBtn.title = "Save the changes made to the patient registration data";
    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const row_index = GetSelectedRowIndex();
        const formData = GetFormData();
        const isValid = ValidateMandatoryFields("Patient data has been updated successfully!");
        // Update the data array with the form data
        if (row_index !== null && isValid) {
            UpdateDataByIndex(row_index-1, formData);
        }

    });
}

const cancelBtn = document.getElementById('cancel-btn') as HTMLButtonElement;
if (cancelBtn) {
    cancelBtn.title = "Clear the form";
    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        ClearForm();
    });
}

const deleteBtn = document.getElementById('delete-btn') as HTMLButtonElement;
if (deleteBtn) {
    deleteBtn.title = "Delete the selected patient from the scheduler and data";
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm("Are you sure you want to delete the selected patient?")) {
            RemoveSchedulerTableRow();
            ClearForm();
        }
    });
}

