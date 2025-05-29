import { SortTableByPatient, SortTableByIndex } from "../components/scheduler-table";

// get elem #scheduler-sort-btn
const schedulerSortBtn = document.getElementById('scheduler-sortIndex-btn') as HTMLButtonElement;

schedulerSortBtn.addEventListener('click', () => {
    console.log('Scheduler sort button clicked');
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

function ResetSortIcon() {
    const icon = schedulerSortBtn.querySelector('svg') as SVGElement;
    if (icon) {
        icon.setAttribute('data-icon', 'arrow-down-1-9');
    }
}

export { ResetSortIcon };