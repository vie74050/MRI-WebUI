import { AddMockRowsToSchedulerTable } from "../test/scheduler-table-test";

const btn = document.getElementById('schedule-select-btn') as HTMLButtonElement;
if (btn) {
    // enable the button if it exists
    btn.disabled = false;
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.disabled = true;
        AddMockRowsToSchedulerTable();
    });
}