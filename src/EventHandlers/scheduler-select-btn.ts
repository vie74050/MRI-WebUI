import { AddMockRowsToSchedulerTable } from "../test/scheduler-table-test";

const btn = document.getElementById('schedule-select-btn') as HTMLButtonElement;
if (btn) {
    //initializeSchedulerSelectBtn();
}

function initializeSchedulerSelectBtn() {
    btn.disabled = false;
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.disabled = true;
        AddMockRowsToSchedulerTable();
    });
}
