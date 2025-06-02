import { GetFormData, ValidateMandatoryFields, ClearForm } from "../components/patientRegistrationForm";
import { GetSelectedRowIndex, RemoveSchedulerTableRow, UpdateSchedulerTableRow } from "../components/scheduler-table";
import { UpdateDataByIndex, GetData } from "../components/data";

const saveBtn = document.getElementById('save-btn') as HTMLButtonElement;
if (saveBtn) {
    saveBtn.title = "Save any changes made to the patient registration data";
    saveBtn.setAttribute("data-bs-toggle", "tooltip");
    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const row_index = GetSelectedRowIndex();
        const origData = GetData();
        const formData = GetFormData();
        
        if (row_index !== null ) {

            if (origData[row_index-1] && JSON.stringify(origData[row_index-1]) === JSON.stringify(formData)) {
                // no changes made, do not update
                return;
            }else {
                const isValid = ValidateMandatoryFields("Patient data has been updated successfully!");
                if (!isValid) {
                    // validation failed, do not update
                    return;
                }else if (confirm("Are you sure you want to save the changes?")) {
                    // Update the data array
                    UpdateDataByIndex(row_index-1, formData);
                    UpdateSchedulerTableRow(row_index, formData);
                }
            }
        }
    });
}

const cancelBtn = document.getElementById('cancel-btn') as HTMLButtonElement;
if (cancelBtn) {
    cancelBtn.title = "Clear the form";
    cancelBtn.setAttribute("data-bs-toggle", "tooltip");
    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        ClearForm();
    });
}

const deleteBtn = document.getElementById('delete-btn') as HTMLButtonElement;
if (deleteBtn) {
    deleteBtn.title = "Delete the selected patient data and remove from the scheduler";
    deleteBtn.setAttribute("data-bs-toggle", "tooltip");
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm("Are you sure you want to delete the selected patient?")) {
            RemoveSchedulerTableRow();
            ClearForm();
        }
    });
}

