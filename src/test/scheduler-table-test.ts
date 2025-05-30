import { AddSchedulerTableRow } from "../components/scheduler-table";
import { formDataType, __DATA__ } from "../components/data";
import { GetNewMockData } from "./patientRegistrationForm-test";

export function AddMockRowsToSchedulerTable() {
    // Generate mock data
    const mockData: formDataType = GetNewMockData();

    // Add the mock data to the scheduler table
    AddSchedulerTableRow(mockData);
    // Add the mock data to the __DATA__ array
    __DATA__.push(mockData);
    // Log the mock data to the console
    console.log("Mock data added to scheduler table:", mockData);

}