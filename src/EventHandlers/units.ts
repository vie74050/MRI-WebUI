// HTML elements
const unitsSelect = document.getElementById("units") as HTMLSelectElement;

const height2putFt = document.getElementById("height1") as HTMLInputElement;
const height2putIn = document.getElementById("height2") as HTMLInputElement;
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
        if (height2putFt.value || height2putIn.value) {
            let ft = height2putFt.value;
            let inch = height2putIn.value;
            const height2Inches = getInchesFromFeetAndInches(ft, inch);
            
            // convert to display in m, cm
            let height2Meters = (height2Inches * 0.0254);
            let remainder = height2Meters % 1;
            let height2Cm = remainder * 100;
            height2Meters = Math.floor(height2Meters);
            height2putFt.value = height2Meters.toString();
            height2putIn.value = height2Cm.toFixed(2);
           
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
        if (height2putFt.value || height2putIn.value) {
            // convert string to float, if empty, set to 0
            let input1 = parseFloat(height2putFt.value) || 0;
            let input2 = parseFloat(height2putIn.value) || 0;

            const height2Cm = input1*100 + input2;
            // convert to display in ft, in
            let height2Inches = (height2Cm * 0.393701);
            const feet = Math.floor(height2Inches / 12);
            const inches = height2Inches % 12;
            height2putFt.value = feet.toString();
            height2putIn.value = inches.toFixed(2);
        }   
        if (weightInput.value) {
            weightInput.value = Math.round(parseFloat(weightInput.value) * 2.2046226218).toString();
        }
        
        unitsFt.innerText = "ft";
        unitsIn.innerText = "in";
        unitsLb.innerText = "lb";
    }
});

function getInchesFromFeetAndInches(feet_s: string, inches_s: string): number {
    // convert string to float, if empty, set to 0
    let feet = parseFloat(feet_s) || 0;
    let inches = parseFloat(inches_s) || 0;
    console.log("feet: ", feet_s);
    console.log("inches: ", inches_s);
    // Convert feet and inches to total inches
    return (feet * 12) + inches;
}
