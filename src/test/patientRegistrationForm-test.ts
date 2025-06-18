import { FormDataType } from "../components/data";

let patientIdCounter = Math.floor(10000 + Math.random() * 90000);

function getNextPatientId() {
    return (patientIdCounter++).toString();
}

function getRandomName() {
    const firstNames = [
        "Alex", "Jamie", "Taylor", "Jordan", "Morgan", "Casey", "Riley", "Avery", "Peyton", "Quinn",
        "Skyler", "Rowan", "Emerson", "Finley", "Dakota", "Sage", "Harper", "Reese", "Elliot", "Phoenix",
        "Cameron", "Drew", "Hayden", "Jesse", "Kendall", "Logan", "Micah", "Parker", "Remy", "Shiloh",
        "Tatum", "Blake", "Charlie", "Devon", "Frankie", "Justice", "Kai", "Marley", "Oakley", "River"
    ];
    const lastNames = [
        "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Martinez", "Lopez",
        "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "Lee",
        "Harris", "Clark", "Lewis", "Walker", "Hall", "Allen", "Young", "King", "Wright", "Scott"
    ];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return { firstName, lastName };
}

function getRandomDOBAndAge() {
    const startYear = 1920;
    const endYear = new Date().getFullYear() - 1;
    const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    const month = Math.floor(Math.random() * 12) + 1;
    // Get max days in month/year
    const daysInMonth = new Date(year, month, 0).getDate();
    const day = Math.floor(Math.random() * daysInMonth) + 1;

    const today = new Date();
    const dob = new Date(year, month - 1, day);
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    return {
        dobMonth: month.toString().padStart(2, "0"),
        dobDay: day.toString().padStart(2, "0"),
        dobYear: year.toString(),
        age: age.toString()
    };
}

function getRandomOptionFromSelect(selectId: string): string {
    const selectElement = document.getElementById(selectId) as HTMLSelectElement;
    if (!selectElement || selectElement.options.length === 0) {
        return ''; // No options available
    }
    const options = Array.from(selectElement.options).filter(option => option.value !== "");
    if (options.length === 0) {
        return ''; // No valid options available
    }
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex].value;
}

// Function to generate new mock data for patient registration form
function GetNewMockData(): FormDataType {
    const randomName = getRandomName();
    const randomDOB = getRandomDOBAndAge();

    // Get list of sex options from #sex select options, randomly select one
    const sex = getRandomOptionFromSelect('sex');

    // Generate random height between 4'6" and 6'6"
    const minFeet = 4, maxFeet = 6;
    const maxInches = 11;
    let heightFeet = Math.floor(Math.random() * (maxFeet - minFeet + 1)) + minFeet;
    let heightInches = Math.floor(Math.random() * (maxInches + 1));
   
    // Generate random weight between 90 and 300 lbs
    const weight = (Math.floor(Math.random() * (300 - 90 + 1)) + 90).toString();

    // Get list of bodyParts from #bodyPart select options, randomly select one
    const bodyPart = getRandomOptionFromSelect('bodyPart');
    
    // Get list of lateralities from #laterality select options, randomly select one
    const lateralities = ['left', 'right', 'both'];
    const laterality = lateralities[Math.floor(Math.random() * lateralities.length)];

    // Randomly select Patient orientation select options
    const orientationOptions = [
        "headSupine",
        "headProne",
        "headLeft",
        "headRight",
        "feetSupine",
        "feetProne",
        "feetLeft",
        "feetRight",
    ];
    const orientationText = orientationOptions[Math.floor(Math.random() * orientationOptions.length)];

    let mockNewData: FormDataType = {
        lastName: randomName.lastName,
        firstName: randomName.firstName,
        title: null,
        suffix: null,
        middleName: null,
        patientId: getNextPatientId(),
        dobMonth: randomDOB.dobMonth,
        dobDay: randomDOB.dobDay,
        dobYear: randomDOB.dobYear,
        age: randomDOB.age,
        ageUnit: "years",
        sex: sex,
        height1: heightFeet.toString(),
        height2: heightInches.toString(),
        weight: weight,
        units: "us",
        admittingDiagnosis: null,
        medicalAlerts: null,
        allergies: null,
        institution: null,
        performingPhysician: null,
        refPhysician: null,
        reqPhysician: null,
        operator: null,
        accessionNr: "",
        reqProcId: "",
        studyDesc: "",
        studyComments: "",
        programSelection: "0",
        rfTransmit: "0",
        bodyPart: bodyPart,
        laterality: laterality,
        orientationId: orientationText
    }

    //console.log("Generated mock data:", mockNewData);
    return mockNewData;
}

export { GetNewMockData }