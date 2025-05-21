// when DOB is changed, update age
// get #dob input and assign change event

// the date input is in the format YYYY-MM-DD

const dobYear = document.querySelector("#dobYear") as HTMLInputElement;
const dobMonth = document.querySelector("#dobMonth") as HTMLSelectElement;
const dobDay = document.querySelector("#dobDay") as HTMLInputElement;

// the age to update when dob is changed, depending on the age unit
// the age unit is in the format of years, months, weeks, days
const ageInput = document.querySelector("#age") as HTMLInputElement;
const ageUnit = document.querySelector("#ageUnit") as HTMLInputElement;

function updateAge() {
    
    // get the dob value from the year, month and day inputs
    const dobYearValue = dobYear.value;
    const dobMonthValue = dobMonth.value;
    const dobDayValue = dobDay.value;
    
    // validate the date
    const dobDateString = `${dobYearValue}-${dobMonthValue}-${dobDayValue}`;
    const dobDate = new Date(dobDateString);
    // check if the date is valid
    if (isNaN(dobDate.getTime())) {
        ageInput.value = "";
        return;
    }

    // get the current date
    const currentDate = new Date();
    
    // calculate the age in milliseconds
    const ageInMilliseconds = currentDate.getTime() - dobDate.getTime();
    // calculate the age in years
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    // calculate the age in months
    const ageInMonths = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.44));
    // calculate the age in weeks
    const ageInWeeks = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 7));
    // calculate the age in days
    const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
    
    // update the age input value depending on the selected unit
    switch (ageUnit.value) {
        case "years":
            ageInput.value = String(ageInYears);
            break;
        case "months":
            ageInput.value = String(ageInMonths);
            break;
        case "weeks":
            ageInput.value = String(ageInWeeks);
            break;
        case "days":
            ageInput.value = String(ageInDays);
            break;
        default:
            break;
    }
}

function validateDate(dateString: string): boolean {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regex)) {
        return false;
    }
    const date = new Date(dateString);
    return date.toISOString().slice(0, 10) === dateString;
}

// add event listener to dob and age unit inputs to update age
dobYear.addEventListener("change", updateAge);
dobMonth.addEventListener("change", updateAge);
dobDay.addEventListener("change", updateAge);
ageUnit.addEventListener("change", updateAge);