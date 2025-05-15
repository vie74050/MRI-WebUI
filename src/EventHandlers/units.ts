// HTML elements
const unitsSelect = document.getElementById("units") as HTMLSelectElement;

const heightInputFt = document.getElementById("heightFt") as HTMLInputElement;
const heightInputIn = document.getElementById("heightIn") as HTMLInputElement;
const weightInput = document.getElementById("weight") as HTMLInputElement;
const unitsFt = document.getElementById("unitsFt") as HTMLLabelElement;
const unitsIn = document.getElementById("unitsIn") as HTMLLabelElement;
const unitsLb = document.getElementById("unitsLb") as HTMLLabelElement;

// add event listener to units 
unitsSelect.addEventListener("change", () => {
    const selectedOption = unitsSelect.options[unitsSelect.selectedIndex] as HTMLOptionElement;
    
    // check if selected option is `metric` or `US`
    if (selectedOption.value === "metric") {
        // check if height input value; convert to metric
        if (heightInputFt.value) {
            const heightInInches = getInchesFromFeetAndInches(parseFloat(heightInputFt.value), parseFloat(heightInputIn.value));
            
            // convert to display in m, cm
            let heightInMeters = (heightInInches * 0.0254);
            let remainder = heightInMeters % 1;
            let heightInCm = remainder * 100;
            heightInMeters = Math.floor(heightInMeters);
            heightInputFt.value = heightInMeters.toString();
            heightInputIn.value = heightInCm.toString();
           
        }
        // check if weight input value; convert to metric
        if (weightInput.value) {
            weightInput.value = Math.round(parseFloat(weightInput.value) * 0.45359237).toString();
        }
       
        unitsFt.innerText = "m";
        unitsIn.innerText = "cm";
        unitsLb.innerText = "kg";
    } else {
        // check if height input value; convert to US
        if (heightInputFt.value) {
            const heightInCm = parseFloat(heightInputFt.value)*100 + parseFloat(heightInputIn.value);
            // convert to display in ft, in
            let heightInInches = (heightInCm * 0.393701);
            const feet = Math.floor(heightInInches / 12);
            const inches = heightInInches % 12;
            heightInputFt.value = feet.toString();
            heightInputIn.value = inches.toString();;
        }   
        if (weightInput.value) {
            weightInput.value = Math.round(parseFloat(weightInput.value) * 2.2046226218).toString();
        }
        
        unitsFt.innerText = "ft";
        unitsIn.innerText = "in";
        unitsLb.innerText = "lb";
    }
});

function getInchesFromFeetAndInches(feet: number, inches: number): number {
    return (feet * 12) + inches;
}
