import { schedulerTableRowType, updateSchedulerTable } from "../components/scheduler-table";

// create some mock scheduler table rows
const mockRows: schedulerTableRowType[] = [
    {
        id: "1",
        patient: "Doe, John",
        procedure: "Arm (Left)",
        date: "10/3/2025 10:00"
    },
    {
        id: "2",
        patient: "Smith, Jane",
        procedure: "Ankle (Right)",
        date: "10/3/2025 11:00"
    },
    {
        id: "3",
        patient: "Johnson, Alice",
        procedure: "Abdomen",
        date: "10/3/2025 12:00"
    }
];

// Function to simulate adding mock rows to the scheduler table
export function AddMockRowsToSchedulerTable() {
    mockRows.forEach(rowData => {
        updateSchedulerTable(rowData);
    });
}