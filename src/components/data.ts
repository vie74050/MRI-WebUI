type FormDataType =
{
    "lastName": string
    "firstName": string | null,
    "title": string | null,
    "suffix": string | null,
    "middleName": string | null,
    "patientId": string,
    "dobMonth": string,
    "dobDay": string,
    "dobYear": string,
    "age": string,
    "ageUnit": string,
    "sex": string,
    "height1": string | null,
    "height2": string | null,
    "weight": string,
    "units": 'us' | 'metric',
    "admittingDiagnosis": string | null,
    "medicalAlerts": string | null,
    "allergies": string | null,
    "institution": 'institution1' | 'institution2' | 'institution3' | null,
    "performingPhysician": string | null,
    "refPhysician": 'physician1' | 'physician2' | 'physician3' | null,
    "reqPhysician": 'physician1' | 'physician2' | 'physician3' | null,
    "operator": string | null,
    "accessionNr": string | null,
    "reqProcId": string | null,
    "studyDesc": string | null,
    "studyComments": string | null,
    "programSelection": '0',
    "rfTransmit": '0',
    "bodyPart": string | null,
    "laterality": string | null,
    "orientationId": string
}

// TEMP: global variable to hold form data
var __DATA__: FormDataType[] = [];

function GetData(): FormDataType[] {
    return __DATA__;
}
function SetData(data: FormDataType[]): void {
    __DATA__ = data;
}
function RemoveDataByIndex(index: number): void {
    if (index >= 0 && index < __DATA__.length) {
        __DATA__.splice(index, 1);
    }
    console.log("Current data: ", __DATA__);
}
function AddData(formData: FormDataType): void {
    __DATA__.push(formData);
    //console.log("Data added: ", formData);
    //console.log("Current data: ", __DATA__);
}
function UpdateDataByIndex(index: number, formData: FormDataType): void {
    
    if (index >= 0 && index < __DATA__.length) {
        __DATA__[index] = formData;
    }
}
export { AddData, RemoveDataByIndex, UpdateDataByIndex, GetData, SetData, FormDataType };