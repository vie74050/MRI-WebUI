type formDataType =
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
    "units": string,
    "admittingDiagnosis": string | null,
    "medicalAlerts": string | null,
    "allergies": string | null,
    "institution": string | null,
    "performingPhysician": string | null,
    "refPhysician": string | null,
    "reqPhysician": string | null,
    "operator": string | null,
    "accessionNr": string | null,
    "reqProcId": string | null,
    "studyDesc": string | null,
    "studyComments": string | null,
    "programSelection": string,
    "rfTransmit": string,
    "bodyPart": string,
    "laterality": string | null,
    "iconSrc": string,
    "iconText": string,
    "iconId": string
}

// TEMP: global variable to hold form data
var __DATA__: formDataType[] = [];

export {__DATA__ as data, formDataType};