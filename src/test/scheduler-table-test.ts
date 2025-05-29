import { SchedulerTableRowType, UpdateSchedulerTable } from "../components/scheduler-table";

// create some mock scheduler table rows
const mockdate = new Date("2025-01-10T10:00:00Z"); 
const mockRows: SchedulerTableRowType[] = [
    {
        id: "1",
        patient: "Doe, John",
        procedure: "Arm (Left)",
        date: `${mockdate.getMonth() + 1}/${mockdate.getDate()}/${mockdate.getFullYear()} ${mockdate.toLocaleTimeString()}`
    },
    {
        id: "2",
        patient: "Smith, Jane",
        procedure: "Ankle (Right)",
        date: `${mockdate.getMonth() + 1}/${mockdate.getDate()}/${mockdate.getFullYear()} ${new Date(mockdate.getTime() + 60 * 60 * 1000).toLocaleTimeString()}`
    },
    {
        id: "3",
        patient: "Johnson, Alice",
        procedure: "Abdomen",
        date: `${mockdate.getMonth() + 1}/${mockdate.getDate()}/${mockdate.getFullYear()} ${new Date(mockdate.getTime() + 120 * 60 * 1000).toLocaleTimeString()}`
    }
];

// Function to simulate adding mock rows to the scheduler table
export function AddMockRowsToSchedulerTable() {
    mockRows.forEach(rowData => {
        UpdateSchedulerTable(rowData);
    });
}