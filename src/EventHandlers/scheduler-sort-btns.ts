import { SortTableByPatient, SortTableByIndex } from "../components/scheduler-table";

// get elem #scheduler-sort-btn
const schedulerSortBtn = document.getElementById('scheduler-sortIndex-btn') as HTMLButtonElement;

if (schedulerSortBtn) {
    // add tooltip
    schedulerSortBtn.setAttribute("data-bs-toggle", "tooltip");
    schedulerSortBtn.title = "Sort the scheduler table by patient name or row index";

    // add event listener
    schedulerSortBtn.addEventListener('click', () => {
        const icon = schedulerSortBtn.querySelector('svg') as SVGElement;
        
        if (icon) {
            // if icon attribute is not set, set it to 'arrow-down-a-z'
            if (icon.getAttribute('data-icon') !== 'arrow-down-a-z') {
                SortTableByPatient();
                icon.setAttribute('data-icon', 'arrow-down-a-z');
            } else {
                SortTableByIndex();
                ResetSortIcon();
            }
        }
    });
}


function ResetSortIcon() {
    const icon = schedulerSortBtn.querySelector('svg') as SVGElement;
    if (icon) {
        icon.setAttribute('data-icon', 'arrow-down-1-9');
    }
}

export { ResetSortIcon };